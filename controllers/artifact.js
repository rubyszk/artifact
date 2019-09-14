const express = require('express');
const router = express.Router();
const Artifact = require('../models/artifact.js');

router.get('/tag/:tag', (req, res) => {
    const dataTag = req.params.tag;
    const id = req.params.id;
    Artifact.find({style: dataTag}, (error, data) => {
        res.render('artifact/first.ejs', {
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
    const dataId = req.params.id;
    Artifact.findById(dataId, (error, data) => {
        if (error) {
            console.log(error)
        } else {
            res.render('edit/edit.ejs', {
                dataId: dataId,
                data: data
            })

        }
    })
});

router.get('/new', (req, res) => {
    res.render('new/new.ejs');
});

router.post('/', (req, res) => {
    Artifact.create(req.body, (error, newArtifact) => {
        if (error) {
            res.send(error)
        } else {
            res.redirect('/index')
        }
    })
})


router.delete('/id/:id', (req, res) => {
    Artifact.findByIdAndRemove(req.params.id, (error, deletedArtifact) => {
        if (error) {
            console.log(error)
        } else {
            res.redirect('/index')
        }
    })
})


// POST MVP SEARCH FUNCTION

// router.get('/search?search=:search', (req, res) => {
//     res.render('../views/artifact/search.ejs')
//     // Artifact.find({style: req.params.search}, (error, result) => {
//     //     console.log(result)
//     //     if (error) {
//     //         console.log(error)
//     //     } else {
//     //         res.send('eeee')
//     //     }
//     // })
// })




module.exports = router;