const express = require('express');
const router = express.Router();
const youtube = require('./youtube');

router.use('/youtube', youtube)

module.exports = router;