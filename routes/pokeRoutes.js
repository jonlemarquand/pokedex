const express = require('express');
const pokeController = require('./../controllers/pokeController');

const router = express.Router();

router
    .route('/')
    .get(pokeController.getAllPokemon)

module.exports = router;