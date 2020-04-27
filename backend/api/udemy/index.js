const express = require('express');
const router = express.Router();
const axios = require('axios');
const { UDEMY_API_URL, UDEMY_MAX_RESULTS, TEST_UDEMY_SEARCH_DATA, TEST_UDEMY_COURSE_DATA } = require('../../config');

router.get('/', (req, res) => {
    res.send('Artha Udemy API')
})

router.get('/courses', (req, res) => {
    if(!req.query['search']){
        res.status(400).send('Missing Parameters');
    }
    if(process.env.NODE_ENV === 'test'){
        return res.send(TEST_UDEMY_SEARCH_DATA);
    }
    axios.get(`${UDEMY_API_URL}/courses?search=${req.query['search']}&page_size=${UDEMY_MAX_RESULTS}`, { 
        headers: { Authorization: `Basic ${Buffer.from(`${process.env.UDEMY_CLIENT_ID}:${process.env.UDEMY_CLIENT_PASSWORD}`).toString('base64')}`}}
    )
    .then(response => {
        res.send(response.data);
    })
    .catch(err => {
        console.log(err.response);
        res.status(err.response.status).send(err.response.statusText)
    })
});

router.get('/courses/:course_id', (req,res) => {
    if(process.env.NODE_ENV === 'test'){
        return res.send(TEST_UDEMY_COURSE_DATA);
    }
    axios.get(`${UDEMY_API_URL}/courses/${req.params['course_id']}?fields[course]=avg_rating_recent,estimated_content_length,num_subscribers`, { 
        headers: { Authorization: `Basic ${Buffer.from(`${process.env.UDEMY_CLIENT_ID}:${process.env.UDEMY_CLIENT_PASSWORD}`).toString('base64')}`}}
    )
    .then(response => {
        res.send(response.data);
    })
    .catch(err => {
        console.log(err.response);
        res.status(err.response.status).send(err.response.statusText)
    })
})

module.exports = router;
