const express = require('express');
const { triggerCall } = require('../controllers/callController');
const router = express.Router();

router.post('/trigger', triggerCall);
module.exports = router;
