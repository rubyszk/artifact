const express = require('express');
const router = express.Router();
const Artifact = require('../models/artifact.js');


router.put('/artifact/id/:id', (req, res) => {
    Artifact.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, data) => {
        if (err) {
            console.log(err)
        } else {
            console.log('updated',data)
            res.redirect(`/artifact/id/${req.params.id}`)
        }
    })
})

module.exports = router;