require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3003;
app.get('/', (req, res) => {
    return res.status(200).send('¡Bienvenidos a express')
});
app.get('/aportes', (req, res) => {
    return res.status(200).send('')
});
try {
    app.listen(PORT, () => {
        console.log(`Listening en port ${PORT}`);
    });
} catch (error) {
    console.log(`Error!!!`);
}