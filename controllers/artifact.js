const express = require('express');
const router = express.Router();
const Artifact = require('../models/artifact.js');


router.get('/:id', (req, res) => {
    res.render('../views/artifact/show.ejs');
});

router.get('/:id/edit', (req, res) => {
    res.render('../views/edit/edit.ejs');
});

// router.put('/:id/edit', (req, res) => {
//     res.redirect('/:id');
// });

module.exports = router;