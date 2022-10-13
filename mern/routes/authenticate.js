var express = require('express')
var router = express.Router()
const { signOut, signUp } = require('../controllers/authenticate')



router.post('/signUp', signUp)
router.get('/signOut', signOut)

module.exports = router