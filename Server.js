const express = require('express');
const app = express();
const cors = require('cors');

const PORT =[3000, process.env.PORT];

app.use(cors());

app.use(express.urlencoded({
    extended: true
}));


app.get('/Bookings', (req, res) => res.status(200).send({hej: 'verden'}));

app.get('/test', (req, res) => res.status(200).send('TestTes'));

app.post('/neworder', (req, res) =>{
    console.log(req);
    res.send("tak");
})
app.listen(PORT[0], () => console.log(`Example app`));