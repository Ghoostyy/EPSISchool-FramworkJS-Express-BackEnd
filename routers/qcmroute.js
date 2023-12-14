// qcmroute.js

const express = require('express');
const router = express.Router();
const {
    displayQcms,
    displayFormQcm,
    createNewQcm,
    displayQcmJson,
    displayQcmDetailed,
    handleQcmSubmission,
} = require('../controllers/qcms');

router.get('/', displayQcms);
router.get('/:qcmid', displayQcmDetailed);
router.post('/:qcmid/submit', handleQcmSubmission);
router.get('/json', displayQcmJson);
router.get('/new', displayFormQcm); // Ensure this line is correct
router.post('/new', createNewQcm);

module.exports = router;
