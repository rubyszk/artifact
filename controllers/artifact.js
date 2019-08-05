const express = require('express');
const router = express.Router();
const Artifact = require('../models/artifact.js');

router.get('/tag/:tag', (req, res) => {
    const dataTag = req.params.tag;
    const id = req.params.id;
    Artifact.find({style: dataTag}, (error, data) => {
        console.log('data: ',data)
        res.render('../views/artifact/first.ejs', {
            currentData: data,
            tag: req.params.tag,
            id: id
        })
    })
});

router.get('/id/:id', (req, res) => {
    const dataId = req.params.id;
    Artifact.findById(dataId, (error, data) => {
        if (error) {
            console.log(error)
        } else {
            res.render('artifact/show.ejs', {
                dataId: dataId,
                data: data
            })

        }
    })
});

router.get('/:id/edit', (req, res) => {
    res.render('../views/edit/edit.ejs');
});

// router.put('/:id/edit', (req, res) => {
//     res.redirect('/:id');
// });

module.exports = router;