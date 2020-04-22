const express = require('express');
const router = express.Router();
const youtube = require('./youtube');
const github = require('./github');
const udemy = require('./udemy');

router.use('/youtube', youtube);
router.use('/github', github);
router.use('/udemy', udemy);

module.exports = router;