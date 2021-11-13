const express = require('express');
const cors = require('cors');



const app = express();

app.use(cors({
    origin: 'http://127.0.0.1:5500'
}));

app.use(express.urlencoded({extended: true}))
// app.use(express.json())

app.get('/test', (req, res) => {
    res.json({message: 'hello world'});
})

app.post('/test', (req, res) => {
    console.log(req.body);
    res.json({message: 'hello world'});
})

app.get('/', (req, res) => {
    res.json({message: 'hello world'});
})
 
app.listen(3000, () => {
    console.log('server listen on port 3000');
})