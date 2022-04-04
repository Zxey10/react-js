const express = require('express');
const port = 3001;
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const User = require('./models/User')

const dbUrl = 'mongodb://localhost:27017/mern-app';

mongoose.connect(dbUrl,{
    useNewUrlParser:true,
    useUnifiedTopology:true
});

const db = mongoose.connection;
db.on('error',console.error.bind(console,"connection error:"));
db.once('open',() => {
    console.log("Database Connected");
})

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.get('/', (req, res) => {
  res.json({msg:'HI FROM SERVER INDEX'})
})

app.get('/home',async(req,res) => {
    const users = await User.find({}) 
    res.json({users:users})
})

app.post('/home',async(req,res) => {
    const name = req.body.name;
    const age = req.body.age;
    const user = new User({name,age})
    if(!user){
        res.json({msg:'Error'})
    }else{
        res.json({userData:req.body})
        await user.save()
    }
})

app.get('/users',async(req,res) => {
    const users = await User.find({}) 
    res.json({users:users})
})

app.listen(port,() => {
    console.log(`Server running on ${port}`);
})