require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cors = require('cors')//Cross Origin Resource Sharing

const authRoutes = require('./routes/authenticate')


//DB Connect
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(() => {
    console.log('DB CONNECTED')
}).catch(console.log('DB GOT OOPS!'))


//Middlewares
app.use(bodyParser.json())
app.use(cookieParser())
app.use(cors())

//My Routes
app.use('/api', authRoutes)


//Port
const PORT = 8000


//Server
app.listen(PORT, () => {
    console.log(`SERVER IS RUNNING AT PORT ${PORT}`);
})
