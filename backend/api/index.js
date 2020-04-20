const express = require('express');
const router = express.Router();
const youtube = require('./youtube');
const github = require('./github');

router.use('/youtube', youtube);
router.use('/github', github);

module.exports = router;