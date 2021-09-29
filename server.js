const express = require('express');
const app = express();
const Pokemon = require('./models/pokemon.js');
const PORT = 3500;

app.listen(PORT, () => {
    console.log(`Gotta catch'em all on port ${PORT}`)
})
