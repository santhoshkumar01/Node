const express = require('express')
const bodyParser = require('body-parser')
const https = require('https')
const PORT = 3000

const app = express()
// app.use(express.static('public'))

app.use(bodyParser.urlencoded({ extended: false }))

app.get('/signUp', (req, res) => {
    console.log(req.url);
    res.sendFile(__dirname + '/signUp.html')
})

app.post('/signUp', (req, res) => {
    const firstName = req.body.fName
    const lastName = req.body.lName
    const email = req.body.email
    const data = {
        members: [
            {
                email_address: email,
                status: "subscribed",
                merge_fields: {
                    FNAME: firstName,
                    LNAME: lastName
                }
            }
        ]
    }
    const jsonData = JSON.stringify(data)

    const url = "https://us11.api.mailchimp.com/3.0/lists/e15e3e337c"
    const options = {
        method: "POST",
        auth: "Santh0shhh1:c5ef3ef9d80d12284f45796263a65ff9-us11"
    }
    const request = https.request(url, options, (response) => {

        // if (response.statusCode === 200) {
        //     res.send("Successfully subscribed!");
        // } else {
        //     res.send("Please Try Again After Sometime!");
        // }

        response.on('data', (data) => {
            console.log(JSON.parse(data))
        })
    })
    request.write(jsonData)
    request.end()
})

app.listen(PORT, () => {
    console.log(`SERVER UP AND RUNNING AT ${PORT}`);
})

// API key c5ef3ef9d80d12284f45796263a65ff9-us11
// https://mailchimp.com/developer/marketing/api/authorized-apps/
// e15e3e337c