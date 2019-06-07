const express = require('express');
const app = express();
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;
const MONGO_URL = "mongodb+srv://newj0001:kylling-123@newj0001-yueqp.mongodb.net/webapp?retryWrites=true";

let db = "";

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

app.post("/bookings", function(req, res){
  var newMember = req.body;
  db.collection("webcollection").insertOne(newMember, function(err, doc) {
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
