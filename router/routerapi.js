const { Router } = require('express');

const routerApi = Router();

routerApi.get('/', (req, res) => {
    res.json('Hello world');
});
module.exports = { routerApi };