
const express = require('express')

const app = express();

app.get('*', (req, res)=>{
    res.send('Hello gigimaytagram')
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('our app is connected')
})