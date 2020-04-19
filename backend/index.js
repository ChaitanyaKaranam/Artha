const express = require('express');
const app = express();
const api = require('./api');

if( process.env.NODE_ENV !== 'production' ) {
    require('dotenv').config();
}

app.listen(process.env.PORT, () => console.log(`Backend started on port ${process.env.PORT}`));

app.get('/', (req, res) => {
    res.send('Welcome to Artha platform');
})

app.use('/api', api);