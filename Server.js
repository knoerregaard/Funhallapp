const express = require('express');
const app = express();
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;
const MONGO_URL = "mongodb+srv://dbUser:chenchen@cluster0-1kji3.mongodb.net/Webapp?retryWrites=true";


let db = "";

MongoClient.connect(MONGO_URL, function (err, client) {
  if (err) throw err;
  db = client.db('Webapp');
});

const PORT =[3000, process.env.PORT];

app.use(cors({
  'Access-Control-Allow-Origin': '*'
}));

//Encoding definition der er nødvendig for at parse urlencoded indhold
app.use(express.urlencoded({
  extended: true
}));


app.use(express.urlencoded({
    extended: true
}));

app.use(express.json());

app.post('/', (req, res) =>{
    console.log(req.body);
    res.send("tak");
})


app.get('/bookings', (req, res) => {
  db.collection("WebCollection").find().toArray( function(err, result){

    console.log(result);
    res.status(200).send(result)
  })
});


app.listen(PORT[0], () => console.log(`Example app listening on port ${PORT[0]}!`))






