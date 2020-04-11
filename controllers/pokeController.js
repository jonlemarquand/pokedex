const fs = require('fs');

const pokemon = JSON.parse(
    fs.readFileSync(`${__dirname}/../data/pokedex.json`)
);

exports.getAllPokemon = (req, res) => {
    res.status(200).json({
        status: 'success',
        requestedAt: req.requestTime,
        results: pokemon.length,
        data: {
            pokemon
        }
    });
};