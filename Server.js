const express = require('express');
const app = express();
const cors = require('cors');


const PORT =[3000, process.env.PORT];

app.use(cors({
  'Access-Control-Allow-Origin': '*'
}));

app.use(express.urlencoded({
  extended: true
}));


app.use(express.urlencoded({
    extended: true
}));

app.use(express.json());


let bookings = [
  {name : 'Klaus'},
  {name : 'Thor'},
  {name : 'Newjan'},
  {name : 'Christian'}
]

app.get('/', (req, res) => res.status(200).send(bookings));

app.post('/', (req, res) =>{
    console.log(req.body);
    res.send("tak");
})
app.listen(PORT[0], () => console.log(`Example app`));
