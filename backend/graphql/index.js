const express = require('express');
const router = express.Router();
const expressGraphQL = require('express-graphql');
const schema = require('./schema');

router.use('/', expressGraphQL({
    schema,
    graphiql: true
}))

module.exports = router;