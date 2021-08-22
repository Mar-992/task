const express = require('express');
const router = express.Router();
const controller = require('../../controllers/storage');

router.post('/', controller.upload)
module.exports = router
