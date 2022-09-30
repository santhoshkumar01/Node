const express = require('express')
const bodyParser = require('body-parser')
// const request = require('request')
const PORT = 3000

const app = express()
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/signUp', (req, res) => {
    console.log(req.url);
    res.sendFile(__dirname+'/signUp.html')
})

app.listen(PORT, () => {
    console.log(`SERVER UP AND RUNNING AT ${PORT}`);
})