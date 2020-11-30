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
        // Password should be encypted before inserting user
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
        res.json({ status: 'deleted' });
    } catch (err) {
        res.json({ status: 'error', err });
    }
});

module.exports = router;