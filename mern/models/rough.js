const crypto = require('crypto')
const { v4: uuidv4 } = require('uuid');


const secret = 'Santhosh!!';
let salt = "Santhosh"
const hash = crypto.createHmac('sha256', secret)
    .update('I love cupcakes')
    .digest('hex');

salt = uuidv4()
console.log('UUID-', salt);
console.log('HASH-', hash);