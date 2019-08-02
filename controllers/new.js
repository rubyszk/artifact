const express = require('express');
const router = express.Router();

router.get('/add', (req, res) => {
    res.render('../views/new/new.ejs');
});


module.exports = router;