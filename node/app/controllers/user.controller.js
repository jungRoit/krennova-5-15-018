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
    jwt.verify(req.token, app.secretKey, (err, authdata) => {
    const user = new User(
        {
            userId: req.body.userId,
            name: req.body.name,
            username: req.body.username,
            password: req.body.password,
            role: req.body.role,
             info: {
                    city: "",
                    address: "",
                    district: "",
                    phone: "",
                }
        }
    );

    user.save().then(data => {
        res.json(data);
    }).catch(err => {
        console.log(err);
    });

});
}

function getAll(req,res){
    jwt.verify(req.token, app.secretKey, (err,authData) => {
        User.find({role:"User"},(err,data) =>{
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

// function updateUser (req, res) {
//     jwt.verify(req.token,app.secretKey,(err,token) =>{
//          User.findByIdAndUpdate(req.params.id,
//         {
//             userId: req.body.userId,
//             name: req.body.name,
//             username: req.body.username,
//             password: req.body.password,
//             role: req.body.role,
//             info:req.body.info
//         }, { new: true }
//     ).then(user => {
//         if(!user){
//            return res.json({message:"User not Found with ID: "+req.params.id});
//         }else{
//             res.json(user);
//         }
//     });
//     });
   
// }
function updateUser (req, res) {
    var _id = req.body._id;
    var userID = req.body.userId;
    var username = req.body.username;
    var password = req.body.password;
    var role = req.body.role;
    var city = req.body.info.city;
    var address = req.body.info.address;
    var district = req.body.info.district;
    var phone = req.body.info.phone;

    jwt.verify(req.token,app.secretKey,(err,token) =>{
         User.update({userId: userID},
         { $set: 
             { 
                userId: userID,
                username: username,
                password: password,
                role: role,
                info: {
                    city: city,
                    address: address,
                    district: district,
                    phone: phone,
                }
            }
        }, function(err, data) {});
    });  
}

function deleteUser (req,res)  {

    jwt.verify(req.token,app.secretKey, (err,authdata) => {
   User.findByIdAndRemove(req.params.id).then(user => {
    if(!user){
        return res.json({message: "user Not Found with ID: "+req.params.id});
    }
    res.json({message:"user Deleted Sccesfully"});
   }).catch(err =>{
    if(err){
        console.log(err);
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