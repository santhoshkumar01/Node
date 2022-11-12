require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cors = require('cors')//Cross Origin Resource Sharing

const authRoutes = require('./routes/authenticate')


// DB Connect
// mongoose.connect('mongodb://localhost:27017/test', {
mongoose.connect('mongodb+srv://Santh0shhh:Nagisubathra@1@cluster0.y9r1oix.mongodb.net/test', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(() => {
    console.log('DB CONNECTED')
}).catch((e) => console.log('DB GOT OOPS!', e))


//Middlewares
app.use(bodyParser.json())
app.use(cookieParser())
app.use(cors())

//My Routes
app.use('/api', authRoutes)
// http://localhost:8000/api/signOut

//Port
const PORT = 8000


//Server
app.listen(PORT, '0.0.0.0', () => {
    console.log(`SERVER IS RUNNING AT PORT ${PORT}`)
})
