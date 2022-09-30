const express = require('express')

const app = express()
const PORT=3000

app.get('/',(req,res)=>{
 console.log(req.url);
    res.send('Home!')
})

app.listen(PORT, () => {
    console.log(`SERVER IS UP & RUNNING! at ${PORT}`);
})


