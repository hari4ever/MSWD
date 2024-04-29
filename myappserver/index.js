const express = require ('express');
const cors = require ('cors');
const { MongoClient } = require('mongodb');

const app = new express();
app.use(express.json());
app.use(cors());

const client = new MongoClient("mongodb+srv://2200039070:Haricharan*2004@cluster0.9nqzeg1.mongodb.net/?retryWrites=true&w=majority")
client.connect();
console.log('Connected to the database');
const db =client.db('KLU')
const col = db.collection('STUDENT')

app.get('/home', (req, res)=> {
    res.send("Home Page");
})

app.post('/insert', (req, res)=>{
    console.log(req.body);
    col.insertOne(req.body);
    res.send("successfully received");
})

app.get('/showall', async(req,res) => {
    const result  = await col.find(). toArray();
    res.send(result);
})

app.post('/check', async(req, res) => {
    console.log("entering check")
    const result  = await col.findOne({'name':req.body.un})
    if(result.password == req.body.pw){
    res.send("Login Sucess") 
        
}
else {
    res.send("Login Failed")
}
    console.log(result);  

})
app.listen(8081,()=>(console.log("server running")));
