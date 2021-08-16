const { Router } = require('express');
const { UNM } = require('../schemas/unm.schemas');
const routerUNM = Router();


routerUNM.get('/:id', (req = request, res = response) => {
    UNM.findById(req.params.id)
        .then(unm => {
            res.json(unm);
        })
        .catch(err => {
            console.log(err);
        })


});

routerUNM.get('/', (req = request, res = response) => {
    UNM.find()
        .then(unm => {
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.json(unm);
        })
        .catch(err => {
            console.log(err);
        })

});

routerUNM.post('/', (req = request, res = response) => {
    UNM.insertMany(req.body)
        .then(res.status(201).end())
        .catch(err => {
            console.log(err);
        })
});


routerUNM.delete('/:id', (req = request, res = response) => {
    UNM.findByIdDelete(req.params.id)
        .then(res.status(200).end())
        .catch(err => {
            console.log(err);
        })
    res.json("UNM");

});


module.exports = { routerUNM };