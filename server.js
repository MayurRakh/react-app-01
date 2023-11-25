const ObjectId = require('mongodb').ObjectId;
const express = require('express');
const cors = require('cors');
const { MongoClient } = require('mongodb');
const app = express();
app.use(cors());
app.use(express.json());

let uri = "mongodb+srv://mukesh-10:mukesh-10@cluster0.6uqlv.mongodb.net/?retryWrites=true&w=majority";
let client = null;
let collection = null;
let loginDb = null;

async function main() {
    client = new MongoClient(uri);
    try {

        await client.connect();
        collection = await client.db("redux_middleware").collection("login_details");
        console.log("successfully connect to mongo cluster");

    } catch (e) {
        console.error(e);
    } finally {

    }
}
main().catch(console.error);

//validate login credintials
app.post("/validateLogin", (req, res) => {
    console.log("In validateLogin Node JS email ",req.body.email+" "+req.body.password);
    loginDb.find({
      "email": req.body.email,
      "password": req.body.password
    })
      .toArray()
      .then((array) => {
        console.log("Server Response  ",array);
        if (array.length > 0) {
          res.send({ "login": "success" });
        } else {
          res.send({ "login": "failed" });
        }
      })
  });
  
//save
app.post("/insert", (req, res) => {
    console.log("Server :: insert ",req.body);
    collection.insertOne({
        "username" :req.body.username,
        "email": req.body.email,
        "password": req.body.password
    })
        .then(item => {
            res.send(item);
        })
        .catch(err => {
            res.send(err);
        });
});

//put
app.put("/update/:id", (req, res) => {
    console.log("In update cf Request ", req.params.id, req.body); //<----Here
    collection.updateOne({ _id: new ObjectId(req.params.id) }, {
        $set: {
            "name": req.body.name,
            "class": req.body.class
        }
    })
        .then(item => {
            res.send(item);
        })
        .catch(err => {
            res.send(err);
        });

});
//delete

app.delete("/delete/:name", (req, res) => {
    console.log("In Delete Request ", req.params.name); //<----Here
    // collection.deleteOne({ _id: new ObjectId(req.params.name) })
    collection.deleteOne({ name: (req.params.name) })
        .then(item => {
            res.send(item);
        })
        .catch(err => {
            res.send(err);
        });
});

//get product list
app.get("/products", (req, res) => {
    collection.find().toArray()
        .then(result => {
            res.send(result);
        })
});




app.listen(6001, () => {
    console.log("Server listening port no 6001 :  http://localhost:6001/update ");
})
