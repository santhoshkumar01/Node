const express = require('express')

const app = express()

app.get('/',(req,res)=>{
    // console.log(req.url);
    res.send('Home!')
})

app.listen(3000, () => {
    console.log('SERVER IS UP & RUNNING!');
})