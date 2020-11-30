const express = require('express');
const path = require('path');

require('dotenv').config();

// App express
const app = express();

// Lectura y parseo del body
app.use(express.json());

const server = require('http').createServer(app);
app.use(require('./routes/people'));
app.use(require('./routes/swapi'));

app.get('/', function (req, res) {
    res.send('Black Start')
});

server.listen(process.env.PORT, (err) => {
    if (err) throw new Error(err);
    console.log('Servidor corriendo en el puerto', process.env.PORT);
})