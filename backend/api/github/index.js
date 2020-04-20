const express = require('express');
const router = express.Router();
const axios = require('axios');
const { GITHUB_API_URL, GITHUB_MAX_RESULTS } = require('../../config');

router.get('/', (req, res) => {
    res.send('Artha Github API')
})

router.get('/search/repositories', (req, res) => {
    axios.get(`${GITHUB_API_URL}/search/repositories?q=${req.query['q']}&sort=stars&per_page=${GITHUB_MAX_RESULTS}`, { headers: { Authorization: `token ${process.env.GITHUB_API_KEY}` } })
        .then(response => {
            res.send(response.data);
        })
        .catch(err => {
            console.log(err);
            res.status(err.response.status).send(err.response.statusText)
        })
})

module.exports = router;