const { qcms, addQcm } = require('../models/inmemory');

const displayQcms = (req, res) => {
    res.render('qcms', { qcms: qcms });
};





const displayQcmJson = (req, res) => {
    res.json({ qcms });
};

const displayFormQcm = (req, res) => {
    res.render('newqcm'); // Ensure the template name matches the file name
};


const createNewQcm = (req, res) => {
    const newQcmDetails = {
        name: req.body.name,
        subject: req.body.subject,
        nbpoints: req.body.nbpoints,
        question: req.body.question,
        options: req.body.options.split(',').map(option => option.trim()), // Split options by comma and trim spaces
    };

    addQcm(newQcmDetails);

    // Redirect to the detailed view of the newly created QCM
    const newlyCreatedQcm = qcms[qcms.length - 1];
    res.redirect(`/qcms/${newlyCreatedQcm.id}`);
};


const displayQcmDetailed = (req, res) => {
    const id = Number(req.params.qcmid);
    const qcm = qcms.find((element) => element.id === id);

    if (qcm) {
        res.render('qcm', { qcm });
    } else {
        res.render('qcm', { qcm: null });
    }
};


const handleQcmSubmission = (req, res) => {
    const qcmId = Number(req.params.qcmid);
    const selectedAnswer = req.body.answer;

    // Process the submitted answer, update scores, etc.
    // ...

    res.redirect('/qcms');
};

module.exports = {
    displayQcms,
    displayFormQcm,
    createNewQcm,
    displayQcmJson,
    displayQcmDetailed,
    handleQcmSubmission,
};
