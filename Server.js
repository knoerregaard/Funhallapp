const express = require('express');
const app = express();
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://dbUser:chenchen@cluster0-1kji3.mongodb.net/Webapp?retryWrites=true";


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


// let bookings = [
//   {
//     name : 'Klaus',
//     id: 1
//   },
//   {
//     name : 'Thor',
//     id: 2
//   },
//   {
//     name : 'Newjan',
//     id: 3,
//   },
//   {
//     name : 'Christian',
//     id: 4
//   }
// ];

app.get('/', (req, res) => res.status(200).send(bookings));

app.post('/', (req, res) =>{
    console.log(req.body);
    res.send("tak");
})

app.listen(PORT[0], () => console.log(`Example app`));

app.get('/bookings', (req, res) => {

    const client = new MongoClient(uri, { useNewUrlParser: true } );

    // Use connect method to connect to the Server
    client.connect(function(err) {
        console.log("Connected successfully to server");

        const db = client.db("Webapp");
        // db.collection("WebCollection").findOne({navn : "Hej"}, (err, result)=>{
        //     res.status(200).send(result)
        // })
        db.collection("WebCollection").find().toArray((err, result)=>{
            res.status(200).send(result)
        })
        // db.collection('inserts').insertOne({a:1}, function(err, r) {

        //     res.status(200).send(r);

        //   });
    });
});









