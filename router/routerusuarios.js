const { Router } = require('express');
const { Usuarios } = require('../schemas/usuarios.schemas');


const routerUsuarios = Router();

routerUsuarios.get('/:id', (req = request, res = response) => {
    Usuarios.findById(req.params.id)
        .then(usuarios => {
            res.json(usuarios);
        })
        .catch(err => {
            console.log(err);
        })


});

routerUsuarios.get('/', (req = request, res = response) => {
    Usuarios.find()
        .then(usuarios => {
            res.json(usuarios);
        })
        .catch(err => {
            console.log(err);
        })

});

routerUsuarios.post('/', (req = request, res = response) => {
    const nuevoUsuario = req.body;
    const usuario = new Usuarios(nuevoUsuario);
    usuario.save()
        .then(res.status(201).end())
        .catch(err => {
            console.log(err);
        })
});

routerUsuarios.delete('/:id', (req = request, res = response) => {
    Usuarios.findByIdDelete(req.params.id)
        .then(res.status(200).end())
        .catch(err => {
            console.log(err);
        })
    res.json("Usuario");

});

module.exports = { routerUsuarios };