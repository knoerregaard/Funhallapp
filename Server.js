const express = require('express');
const app = express();
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://dbUser:chenchen@cluster0-1kji3.mongodb.net/Webapp?retryWrites=true";

// const client = new  MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   const collection = client.db("Webapp").collection("WebCollection");
//   collection.insert('hej')
//   client.close();
// });
const PORT =[3000, process.env.PORT];

app.use(cors({
    'Access-Control-Allow-Origin': '*'
}));

app.use(express.urlencoded({
    extended: true
}));

app.use(express.json());

//app.get('/Bookings', (req, res) => res.status(200).send({hej: 'verden'}));

app.get('/test', (req, res) => res.status(200).send('TestTes'));

app.get('/Activities', (req, res) => res.status(200).send({act: 'First activity'}));

app.post('/neworder', (req, res) =>{
    console.log(req);
    res.send("tak");
})

app.post('/Activities', (req, res) =>{
    req.send()
})
app.listen(PORT[0], () => console.log(`Example app`));






let bookings = [
    {name : 'Klaus'},
    {name : 'Thor'}
]

//app.get('/Bookings', (req, res) => res.status(200).send('hej'));


app.get('/Bookings123', (req, res) => {

    const client = new MongoClient(uri, { useNewUrlParser: true } );

    // Use connect method to connect to the Server
    client.connect(function(err) {
        console.log("Connected successfully to server");

        const db = client.db("Webapp");


        db.collection("WebCollection").find().toArray((err, result)=>{
            res.status(200).send(result)
        })
        // db.collection('inserts').insertOne({a:1}, function(err, r) {

        //     res.status(200).send(r);

        //   });
    });
 


    // mongoclient.collection('WebCollection').find(), function (findErr, result) {
    //     if (findErr) throw findErr
    //     // result = db.collection('WebCollection').find();
    //     console.log(result);
    //     res.status(200).send("result");
    // };   
          
    }); 









