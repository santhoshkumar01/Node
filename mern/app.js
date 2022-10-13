require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cors = require('cors')

mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(() => {
    console.log('DB CONNECTED')
}).catch(console.log('DB GOT OOPS!'))

app.use(bodyParser.json())
app.use(cookieParser())
app.use(cors())

const app = express()
const PORT = 8000

app.listen(PORT, () => {
    console.log(`SERVER IS RUNNING AT PORT ${PORT}`);
})
