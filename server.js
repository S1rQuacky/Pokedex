const express = require('express');
const app = express();
const Pokedex = require('./models/pokemon.js');
const PORT = 3500;

// server files statically to public
app.use(express.static("public"))

//INDEX
app.get('/pokedex/', (req, res) => {
        res.render('index.ejs', {poke: Pokedex})
    })
    


app.listen(PORT, () => {
    console.log(`Gotta catch'em all on port ${PORT}`)
})
