const express = require('express')
const mongoose = require('mongoose')
const cors = require("cors");
const bodyParser = require('body-parser')
const { User} = require('./models/user')
require('dotenv').config
const app = express()
app.use(
    cors({
      origin: "*",
    })
  );
  app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const port = process.env.PORT || 3002

const mongoUri = 'mongodb+srv://admin:Aver2lvp6rsi6!@studenthunt.gbnezbh.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(mongoUri,{
    useNewUrlParser:true
})
app.listen(port,()=>{
    console.log('Server is runing on port ',port)
})

app.post('/register', (req, res) => {
    const request = req.body;
    const schema = new User;
    console.log(request,'request')
    schema.email=request.email,
    schema.password=request.password,
    schema.role=request.role,
    schema.firstname=request.firstname,
    schema.lastname=request.lastname,
    schema.cart=request.cart,
    schema.history=request.history,
    schema.varified=request.varified,
    schema.save();
    res.send('Ok');
});