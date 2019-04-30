const express = require('express');
const app = express();
const cors = require('cors');

const PORT =[3000, process.env.PORT];

app.use(cors());

app.use(express.urlencoded({
    extended: true
}));

let bookings = [
  {name : 'Klaus'},
  {name : 'Thor'},
  {name : 'Newjan'},
  {name : 'Christian'}
]

app.get('/Bookings', (req, res) => res.status(200).send(bookings));

app.get('/test', (req, res) => res.status(200).send('TestTes'));

app.post('/Bookings', (req, res) =>{
    console.log(req.body);
    res.send("tak");
})
app.listen(PORT[0], () => console.log(`Example app`));
