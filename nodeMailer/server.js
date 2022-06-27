require('dotenv').config()
const nodemailer = require('nodemailer')

var transporter = nodemailer.createTransport({
    service: 'gmail',
    secure:true,
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
})

let mailOptions = {
    from: 'santhoshaarthi1999@gmail.com',
    to: 'santhosh@cygnusinnovations.com',
    subject: 'Wishing You a Happy Many More Returns of The Day!',
    text: 'Happy Birthday!'
}

transporter.sendMail(mailOptions, function (error, data) {
    if (error) {
        console.log('OOPS ERROR OCCURED',error);
    } else {
        console.log('EMAIL SENT: ' + info.response);
    }
})