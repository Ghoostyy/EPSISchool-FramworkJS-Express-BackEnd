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

// Display QCMs list
router.get('/', displayQcms);

// Display detailed QCM
router.get('/:qcmid', displayQcmDetailed);

// Handle QCM submission
router.post('/:qcmid/submit', handleQcmSubmission);

// Display JSON representation of QCMs
router.get('/json', displayQcmJson);

// Display form for creating a new QCM
router.get('/new', displayFormQcm);

// Handle new QCM creation
router.post('/new', createNewQcm);

module.exports = router;
