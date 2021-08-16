const { Router } = require('express');
const { Aportes } = require('../schemas/aportes.schemas');
const routerAportes = Router();


routerAportes.get('/:id', (req = request, res = response) => {
    Aportes.findById(req.params.id)
        .then(aportes => {
            res.json(aportes);
        })
        .catch(err => {
            console.log(err);
        })


});

routerAportes.get('/', (req = request, res = response) => {
    Aportes.find()
        .then(aportes => {
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.json(aportes);
        })
        .catch(err => {
            console.log(err);
        })

});

routerAportes.post('/', (req = request, res = response) => {
    Aportes.insertMany(req.body)
        .then(res.status(201).end())
        .catch(err => {
            console.log(err);
        })
});


routerAportes.delete('/:id', (req = request, res = response) => {
    Aportes.findByIdDelete(req.params.id)
        .then(res.status(200).end())
        .catch(err => {
            console.log(err);
        })
    res.json("Aportes");

});


module.exports = { routerAportes };