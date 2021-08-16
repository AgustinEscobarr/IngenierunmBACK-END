const { Router } = require('express');
const { Contactos } = require('../schemas/contactos.schemas');
const routerContactos = Router();


routerContactos.get('/:id', (req = request, res = response) => {
    Contactos.findById(req.params.id)
        .then(contactos => {
            res.json(contactos);
        })
        .catch(err => {
            console.log(err);
        })


});

routerContactos.get('/', (req = request, res = response) => {
    Contactos.find()
        .then(contactos => {
            res.json(contactos);
        })
        .catch(err => {
            console.log(err);
        })

});

routerContactos.post('/', (req = request, res = response) => {
    Contactos.insertMany(req.body)
        .then(res.status(201).end())
        .catch(err => {
            console.log(err);
        })
});

routerContactos.delete('/:id', (req = request, res = response) => {
    Contactos.findByIdDelete(req.params.id)
        .then(res.status(200).end())
        .catch(err => {
            console.log(err);
        })
    res.json("Contactos");

});


module.exports = { routerContactos };