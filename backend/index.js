const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const api = require('./api');
const graphQL = require('./graphql');
const cors = require('cors');

if( process.env.NODE_ENV !== 'production' ) {
    require('dotenv').config();
}

app.use(cors());

app.use(bodyParser.json());

app.listen(process.env.PORT, () => console.log(`Backend started on port ${process.env.PORT} - Environment: ${process.env.NODE_ENV}`));

app.get('/', (req, res) => {
    res.send('Welcome to Artha platform');
})

app.use('/api', api);

app.use('/graphql', graphQL);