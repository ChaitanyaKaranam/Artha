const express = require('express');
const router = express.Router();
const axios = require('axios');
const { YOUTUBE_API_URL, YOUTUBE_MAX_RESULTS, TEST_YOUTUBE_SEARCH_DATA, TEST_YOUTUBE_VIDEO_DATA, TEST_YOUTUBE_CHANNEL_DATA } = require('../../config');

router.get('/', (req, res) => {
    res.send('Artha Youtube API')
})

router.get('/search', (req, res) => {
    if(!req.query['q']){
        res.status(400).send('Missing Parameters');
    }
    if(process.env.NODE_ENV === 'test'){
        return res.send(TEST_YOUTUBE_SEARCH_DATA);
    }
    axios.get(`${YOUTUBE_API_URL}/search?part=snippet&q=${req.query['q']}%20tutorial&type=video&maxResults=${YOUTUBE_MAX_RESULTS}&order=viewCount&key=${process.env.YOUTUBE_API_KEY}`)
        .then(response => {
            res.send(response.data);
        })
        .catch(err => {
            console.log(err.response);
            res.status(err.response.status).send(err.response.statusText)
        })
})

router.get('/videos', (req, res) => {
    if(!req.query['id']){
        res.status(400).send('Missing Parameters');
    }
    if(process.env.NODE_ENV === 'test'){
        return res.send(TEST_YOUTUBE_VIDEO_DATA);
    }
    axios.get(`${YOUTUBE_API_URL}/videos?key=${process.env.YOUTUBE_API_KEY}&part=snippet%2CcontentDetails%2Cstatistics&id=${req.query['id']}`)
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
    if(process.env.NODE_ENV === 'test'){
        return res.send(TEST_YOUTUBE_CHANNEL_DATA);
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
