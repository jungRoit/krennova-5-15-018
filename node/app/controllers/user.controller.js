const jwt = require('jsonwebtoken');
const User = require('../models/user.model');
const app = require('../../app');

module.exports = {
    getAll,
    getById,
    insertUser,
    updateUser,
    deleteUser,
    login,
    afterLoginToken
}

function insertUser(req,res) {
    jwt.verify(req.token, app.secretKey, (err,authData) => {
        const user = new User(
            {
                userId:req.body.userId,
                username: req.body.username,
                password: req.body.password,
                role: req.body.role,
                info: req.body.info
            }
        );
        user.save().then((err,data) => {
            if(err){
                console.log(err);
            }else{
                res.json(data);
            }
        });
    });
}

function getAll(req,res){
    jwt.verify(req.token, app.secretKey, (err,authData) => {
        User.find({},(err,data) =>{
            if(err){
                console.log(err);
            }else{
                res.json(data);
            }
        });
    });
}

function getById(req,res){
    jwt.verify(req.token, app.secretKey, (err,authData) => {
        var id = req.params.id;
        User.find({_id:id}, (err,data) => {
            if(err){
                console.log(err);
            }else{
                res.json(data);
            }
        });
    });
}

function updateUser(req,res){
    jwt.verify(req.token, app,secretKey, (err,authData) => {
        User.findByIdAndUpdate(req.params.id,
            {
                userId:req.body.userId,
                username: req.body.username,
                password: req.body.password,
                role: req.body.role,
                info: req.body.info
            },{new:true},
            (err,data) => {
                if(err){
                    console.log(err);
                }else if(!data){
                    return res.json({message:"User not Found with ID: "+req.params.id});
                }else{
                    res.json(data);
                }
            }
        )
    });
}

function deleteUser(req,res){
    jwt.verify(req.token, app.secretKey, (err,authData) => {
        User.findByIdAndRemove(req.params.id,(err,data) => {
            if(err){
                console.log(err);
            }else if(!data){
                return res.json({message:"User not Found with ID: "+req.params.id});
            }else{
                res.json("User Deleted Succesfully");
            }
        });
    });
}

function login(req,res) {
    var username = req.body.username;
    var password = req.body.password;
    User.find({username:username, password:password}, (err,data) => {
        if(err){
            console.log(err);
        }else{
            jwt.sign({data},app.secretKey, (err,token) => {
                if(err){
                    console.log(err);
                }else{
                    res.json(token);
                }
            });
        }
    });

}

function afterLoginToken(req,res) {
    var username = req.params.username;
    var password = req.params.password;
       jwt.verify(req.token, app.secretKey, (err, authdata) => {
               User.find({username: username, password: password},(err,data) => {
                if(err){
                    console.log(err);
                }else{
                    res.json(data)                   
                }
               
            });
       });
}