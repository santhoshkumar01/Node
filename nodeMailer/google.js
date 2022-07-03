require('dotenv').config()
const nodemailer = require('nodemailer');
const { google } = require('googleapis');
var data = require('./index.html')

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

        const mailOptions = {
            from: process.env.EMAIL,
            to: 'santhosh@cygnusdigitalinnovations.com',
            // to: 'arun@cygnusinnovations.com,nikhil@cygnusinnovations.com,vijay@cygnusinnovations.com,santhosh@cygnusinnovations.com,phanikondru@gmail.com,caksl1999@gmail.com,Panduyash1999@gmail.com',
            subject: 'Orange',
            text: 'sydney nagaram chese neeram innalu ninnu dhachunchindhi sigge paduthu thappe thelisiee rojaina chupinchindhi',
            html: data,
        };

        const result = await transport.sendMail(mailOptions);
        return result;
    } catch (error) {
        return error;
    }
}

sendMail()
    .then((result) => console.log('EMAIL SENT', result))
    .catch((error) => console.log('OOPS FAILED TO SEND EMAIL', error.message));

