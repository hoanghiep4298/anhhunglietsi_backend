const express = require('express')
const controller = require('../controllers/admin.controller');

const router = express.Router();

// define route
router.get('/', controller.index);


module.exports = router;