const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const mongoose = require('mongoose')

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/artifact'

app.get('/', (req, res) => {
    res.send('running')
})

mongoose.connect(MONGODB_URI, {useNewUrlParser: true}, () => {
    console.log('connected to mongo')
})

app.listen(PORT, () => {
    console.log('listening on port', PORT)
})