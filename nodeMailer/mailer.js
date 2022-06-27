require('dotenv').config()
const nodemailer = require('nodemailer');
const { google } = require('googleapis');
var fs = require('fs');

const oAuth2Client = new google.auth.OAuth2(
    process.env.CLIENT_ID,
    process.env.CLEINT_SECRET,
    process.env.REDIRECT_URI
);
oAuth2Client.setCredentials({ refresh_token: process.env.REFRESH_TOKEN });

async function sendMail() {
    try {
        const accessToken = await oAuth2Client.getAccessToken();

        const transport = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                type: 'OAuth2',
                user: process.env.EMAIL,
                clientId: process.env.CLIENT_ID,
                clientSecret: process.env.CLEINT_SECRET,
                refreshToken: process.env.REFRESH_TOKEN,
                accessToken: accessToken,
            },
        });

        fs.readFile('index.html', { encoding: 'utf-8' }, function (err, html) {
            if (err) {
                console.log(err);
            } else {
                const mailOptions = {
                    from: process.env.EMAIL,
                    to: 'arun@cygnusinnovations.com,nikhil@cygnusinnovations.com,vijay@cygnusinnovations.com,santhosh@cygnusinnovations.com,phanikondru@gmail.com,caksl1999@gmail.com,Panduyash1999@gmail.com',
                    subject: 'Happy birthday!',
                    text: 'Happy birthday! I hope all your birthday wishes and dreams come true',
                    html: html,
                };
                const result =  transport.sendMail(mailOptions);
                return result;
            }
        })
    } catch (error) {
        return error;
    }
}

sendMail()
    .then((result) => console.log('EMAIL SENT', result))
    .catch((error) => console.log('OOPS FAILED TO SEND EMAIL', error.message));

