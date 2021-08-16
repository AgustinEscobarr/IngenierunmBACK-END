const { Router } = require('express');
const { Noticias } = require('../schemas/noticias.schemas');
const routerNoticias = Router();


routerNoticias.get('/:id', (req = request, res = response) => {
    Noticias.findById(req.params.id)
        .then(noticias => {
            res.json(noticias);
        })
        .catch(err => {
            console.log(err);
        })


});

routerNoticias.get('/', (req = request, res = response) => {
    Noticias.find()
        .then(noticias => {
            res.json(noticias);
        })
        .catch(err => {
            console.log(err);
        })

});

routerNoticias.post('/', (req = request, res = response) => {

    Noticias.insertMany(req.body)
        .then(res.status(201).end())
        .catch(err => {
            console.log(err);
        })
});

routerNoticias.delete('/:id', (req = request, res = response) => {
    Noticias.findByIdDelete(req.params.id)
        .then(res.status(200).end())
        .catch(err => {
            console.log(err);
        })
    res.json("Noticias");

});


module.exports = { routerNoticias };