const express = require('express');
const router = express.Router();
const axios = require('axios');
const { YOUTUBE_API_URL, YOUTUBE_MAX_RESULTS } = require('../../config');

router.get('/', (req, res) => {
    res.send('Welcome to Youtube API')
})

router.get('/search', (req, res) => {
    if(!req.query['q']){
        res.status(400).send('Missing Parameters');
    }
    axios.get(`${YOUTUBE_API_URL}/search?part=snippet&q=${req.query['q']}&maxResults=${YOUTUBE_MAX_RESULTS}&order=viewCount&key=${process.env.YOUTUBE_API_KEY}`)
        .then(response => {
            res.send(response.data);
        })
        .catch(err => {
            console.log(err.response);
            res.status(err.response.status).send(err.response.statusText)
        })
})

router.get('/channels', (req, res) => {
    if(!req.query['channelId']){
        res.status(400).send('Missing Parameters');
    }
    axios.get(`${YOUTUBE_API_URL}/channels?part=snippet%2Cstatistics&key=${process.env.YOUTUBE_API_KEY}&id=${req.query['channelId']}`)
        .then(response => {
            res.send(response.data);
        })
        .catch(err => {
            console.log(err.response);
            res.status(err.response.status).send(err.response.statusText)
        })
})

module.exports = router;
