const express = require('express');
const router = express.Router();
const swapi = require('swapi-node');
const People = require('../models/entity/people');
const Peoples = require('../models/entity/peoples');

router.get('/swapi/peoples/:page', async (req, res = response) => {
    try {
        const peoples = new Peoples();
        const page = req.params.page;
        //let peoplesResult = [];

        const peoplesResult = await swapi
            .get(`${process.env.URL}/people/?page=${page}`)
            .then((result) => result.results);

        for (const people of peoplesResult) {
            peoples.addPeople(new People(people));
        }

        res.json({
            ok: true,
            page: `page:[${page}] items:[${peoples.getPeoples().length}]`,
            peoples: peoples.getPeoples()
        });

    } catch (error) {
        res.json({
            ok: false,
            error: error
        });
        console.log("Error Peoples");
    }
});

router.get('/swapi/people/:uid', async (req, res = response) => {

    try {
        const uid = req.params.uid;
        const peopleResult = await swapi
            .getPerson(uid)
            .then((result) => result);
        const people = new People(peopleResult);

        res.json({
            ok: true,
            people: people
        });
    } catch (error) {
        res.json({
            ok: false,
            error: error.message
        });
        console.log("Error People");
    }
});

module.exports = router;