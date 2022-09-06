const express = require('express')
const path = require('path')
const cors = require('cors')
const app = express()

// static middleware
app.use(express.static(path.join(__dirname, '..','public')))

app.use(cors())
app.use(express.json());

//this is where some things should go
app.use('/api', require('./api'))


app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});




module.exports = app;
