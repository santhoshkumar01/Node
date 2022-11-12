var express = require('express')
var router = express.Router()
const { signOut, signUp,signIn } = require('../controllers/authenticate')
const { body } = require('express-validator')

//express validators

router.post('/signUp',
    body('email', 'email is required').isEmail(),
    body('password', 'password should be min 5 char').isLength({ min: 5 }),
    signUp)


router.post('/signIn',
    body('email', 'email is required').isEmail(),
    body('password', 'password should be min 5 char').isLength({ min: 5 }),
    signIn)


router.get('/signOut', signOut)

module.exports = router