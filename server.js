const express = require('express');
const app = express();
const Pokedex = require('./models/pokemon.js');
const PORT = 3500;
const methodOverride = require('method-override')

app.use(express.urlencoded({extended: false}))

// server files statically to public
app.use(express.static("public"))

app.use(methodOverride('_method'))

//INDEX
app.get('/pokedex/', (req, res) => {
        res.render('index.ejs', {poke: Pokedex})
    })

//NEW
app.get('/pokedex/new', (req, res) => {
    res.render('new.ejs',)
})

//DESTROY
app.delete('/pokedex/:id', (req, res) => {
    Pokedex.splice(req.params.id, 1);
    res.redirect('/pokedex')
})
//UPDATE  // I was unable to fix the post on the update route. At the advice of 
//Ira, i think i have about 60% of this homework done and am turning it in. 
app.put("/pokedex/:id", (req, res) => {
    Pokedex[req.params.id] = req.body
    res.redirect("/pokedex")
})
//CREATE
app.post("/pokedex", (req, res) => {
    const newPoke = {
        id: req.body.id,
        name: req.body.name,
        img: req.body.url,
        type: [req.body.type],
        stats: {
            hp: req.body.hp,
            attack: req.body.attack,
            spattack: req.body.spattack,
            defense: req.body.defense,
            speed: req.body.defense
        }
    }
    Pokedex.unshift(newPoke)
    res.redirect("/pokedex")
})
//EDIT
app.get("/pokedex/:id/edit", (req, res) => {
    res.render("edit.ejs", {
        poke: Pokedex[req.params.id],
        pokes : req.params.id,
    })
})

//SHOW
app.get('/pokedex/:id', (req, res) => {
    res.render("show.ejs", {poke: Pokedex[req.params.id]})
})

app.listen(PORT, () => {
    console.log(`Gotta catch'em all on port ${PORT}`)
})
