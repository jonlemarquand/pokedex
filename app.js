const express = require('express');

const pokeRouter = require('./routes/pokeRoutes');

const app = express();

app.use('/api/v1/pokemon', pokeRouter);

module.exports = app;