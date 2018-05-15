const mongoose = require('mongoose');

const schema = mongoose.Schema(
    {
        userId: {
            type:Number
        },
        username: {
            type:String
        },
        password: {
            type:String
        },
        role: {
            type:String
        },
        info: {
            type:Object
        }
    },
    {
        timestamp:true
    }

);

module.exports = mongoose.model("User",schema);