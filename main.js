require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { dbConnection } = require(`./mongo`)
const { routerUsuarios } = require('./router/routerusuarios.js');
const { routerApi } = require('./router/routerapi.js');
const { routerAportes } = require('./router/routeraportes');
const { routerNoticias } = require('./router/routernoticias');
const { routerUNM } = require('./router/routerunm');
const { routerContactos } = require('./router/routercontactos');
const app = express();
app.use(express.json());
const main = () => {

    app.use(cors());
    app.use('/api/usuarios', routerUsuarios);
    app.use('/api', routerApi);
    app.use('/api/aportes', routerAportes);
    app.use('/api/unm', routerUNM);
    app.use('/api/noticia', routerNoticias);
    app.use('/api/contactos', routerContactos);

    app.listen(3000, () => {
        console.log("Servidor funcionando");
    });
}

dbConnection()
    .then(main)
    .catch(err => {
        console.log(err);
    });