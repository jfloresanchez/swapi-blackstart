const express = require('express');
const router = express.Router();
const pool = require('../database/config');

// Get all peoples
router.get('/api/peoples', async (req, res) => {
    const peoples = await pool.query('SELECT * FROM peoples');
    res.json(peoples);
});

// Get one people
router.get('/api/peoples/:id', async (req, res) => {
    const { id } = req.params;
    const people = await pool.query('SELECT * FROM peoples WHERE id = ?', [id])
    res.json(people);
});

// Create people
router.post('/api/peoples', async (req, res) => {
    try {
        formatBody(req);
        await pool.query('INSERT INTO peoples SET ?', [req.body]);
        res.json({ status: 'created' });
    } catch (err) {
        console.log(err);
        res.json({ status: 'error', err });
    }
});

// Update people
router.put('/api/peoples/:id', async (req, res) => {
    try {
        const { id } = req.params;
        formatBody(req);
        await pool.query('UPDATE peoples SET ? WHERE id = ?', [req.body, id]);
        res.json({ status: 'updated' });
    } catch (err) {
        res.json({ status: 'error', err });
    }
});

// Delete people
router.delete('/api/peoples/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await pool.query('DELETE FROM peoples WHERE id = ?', id);
        pool.
            res.json({ status: 'deleted' });
    } catch (err) {
        res.json({ status: 'error', err });
    }
});

function formatBody(req) {
    req.body.pelicula = req.body.pelicula != null ? JSON.stringify(req.body.pelicula) : "";
    req.body.especie = req.body.especie != null ? JSON.stringify(req.body.especie) : "";
    req.body.vehiculo = req.body.vehiculo != null ? JSON.stringify(req.body.vehiculo) : "";
    req.body.nave_estelar = req.body.nave_estelar != null ? JSON.stringify(req.body.nave_estelar) : "";
}

module.exports = router;