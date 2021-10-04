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

//NEW

//DESTROY

//UPDATE

//CREATE

//EDIT
    

//SHOW
app.get('/pokedex/:id', (req, res) => {
    res.render('show.ejs', {poke: Pokedex[req.params.id]})
})

app.listen(PORT, () => {
    console.log(`Gotta catch'em all on port ${PORT}`)
})
