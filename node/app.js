const express = require('express');
const bodyParser = require('body-parser');
const dbConfig = require('./config/dbConfig');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

module.exports = {
    secretKey: '2d235ace000a3ad85f590e321c89bb99'
}

const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.use(bodyParser.json());

app.use((req,res,next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Auth ");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    next();
});

mongoose.Promise = global.Promise;

mongoose.connect(dbConfig.url).then(() => {
    console.log("Let's get started");
}).catch(err => {
    console.log(err);
});

app.get('/',(req,res) => {
    res.json({"message":"Welcome to the api"});
});

require('./app/routes/user.route')(app);

app.listen(21000, () => {
    console.log("the server is running at 21000");
});



