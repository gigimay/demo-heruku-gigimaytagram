
const express = require('express')

const app = express();

app.use('/', express.static(__dirname + '/gigimaytagram-front/dist'))

app.get('/*', (req, res)=>{
    res.sendFile(__direname + '/gigimaytagram-front/dist/index.html')
});

console.log('direname :', __dirname);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('the app of gigimaytagram is now connected')
})

