
const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const MongoClient = require('mongodb').MongoClient;
const bodyParser     =         require("body-parser");
const MONGO_URL = "mongodb+srv://newj0001:kylling-123@newj0001-yueqp.mongodb.net/webapp?retryWrites=true";

let db = "";

// mongoose.connect(MONGO_URL, { useNewUrlParser: true }).then(
//   () => {console.log('Database is connected')},
//   err => {console.log('Can not connect to the database' + err)}
// );



MongoClient.connect(MONGO_URL, { useNewUrlParser: true }, function (err, client) {
  if (err) throw err;
  db = client.db('webapp');
});

const PORT =[3000, process.env.PORT];

app.use(cors({
  'Access-Control-Allow-Origin': '*'
}));

//Encoding definition der er nødvendig for at parse urlencoded indhold
app.use(express.urlencoded({
  extended: true
}));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.urlencoded({
    extended: true
}));

app.use(express.json());

app.get('/bookings', (req, res) => {
  db.collection("webcollection").find().toArray( function(err, result){
    console.log(result);
    res.status(200).send(result)
  })
});

app.listen(PORT[0], () => console.log(`Example app listening on port ${PORT[0]}!`))

app.post("/", (req, res) => {
  const bookings = {
    members:[
      name = req.body.members,
    ],
    name: req.body.name
  };
  db.collection("webcollection").insertOne(bookings, function(err, doc) {
    if (err) {
      handleError(res, err.message, "Failed to create new contact.");
    } else {
      res.status(201).json(doc.ops[0]);
    }
  });
});




// Generic error handler used by all endpoints.
function handleError(res, reason, message, code) {
  console.log("ERROR: " + reason);
  res.status(code || 500).json({"error": message});
}
