var mongoose = require('mongoose');

var itemSchema = new mongoose.Schema({
    name : String,
    image : String,
    desc : String,
    price : Number,
    stock : Number,
    category : String,
    date : String,
    sold: Number,
    author: {
        id : {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'User'
        },
        username : String,
        image : String
    },
    comments : [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Comment'
        }
    ]
});

module.exports = mongoose.model('Item', itemSchema);