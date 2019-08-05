const express = require('express');
const router = express.Router();
const Artifact = require('../models/artifact.js');

router.get('/:tag', (req, res) => {
    const dataTag = req.params.tag;
    Artifact.find({style: dataTag}, (error, data) => {
        console.log('data: ',data)
        res.render('../views/artifact/first.ejs', {
            currentData: data,
            tag: req.params.tag

        })

    })
});

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