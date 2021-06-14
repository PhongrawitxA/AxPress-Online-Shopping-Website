var mongoose = require('mongoose');
    Item = require('./model/item');
    Comment = require('./model/comment');
    User = require('./model/user');

var dataItem = [
        {   
            name: 'iPhone11',
            image:'/uploads/iPhone11.jpeg',
            desc:'xxxxx',
            price:'20000',
            stock:'5',
            category:'Smartphone',
            sold:'200',
            author : {
                id : '60a23cdd13fdc43689eb8ded',
                username : 'asd'
            }
        },
        {   
            name: 'PS5',
            image:'/uploads/PS5.jpeg',
            desc:'xxxxx',
            price:'15000',
            stock:'5',
            category:'Game',
            sold:'100',
            author : {
                id : '60a23cdd13fdc43689eb8ded',
                username : 'asd'
            }
        },
        {   
            name: 'RTX 3070',
            image:'/uploads/RTX3070.png',
            desc:'xxxxx',
            price:'65000',
            stock:'5',
            category:'Computer',
            sold:'80',
            author : {
                id : '60a23cdd13fdc43689eb8ded',
                username : 'asd'
            }
        },
        {   
            name: 'Adidas NMD R1',
            image:'/uploads/nmd.jpeg',
            desc:'xxxxx',
            price:'5000',
            stock:'5',
            category:'Shoe',
            sold:'50',
            author : {
                id : '60a23cdd13fdc43689eb8ded',
                username : 'asd'
            }
        },
        {   
            name: 'Kitty',
            image:'/uploads/kitty.jpeg',
            desc:'xxxxx',
            price:'1500',
            stock:'5',
            category:'Figure',
            sold:'20',
            author : {
                id : '60a23cdd13fdc43689eb8ded',
                username : 'asd'
            }
        }
];

function seedDB(){
    Comment.remove({}, (err) => {
        if(err){
            console.log(err);
        } else {
            console.log('Comment remove complete');
        }
    })
    Cart.remove({}, (err) => {
        if(err){
            console.log(err);
        } else {
            console.log('Cart remove complete');
        }
    })
    // User.remove({}, (err) => {
    //     if(err){
    //         console.log(err);
    //     } else {
    //         console.log('User remove complete');
    //     }
    // })
    Item.remove({}, (err) => {
        if(err){
            console.log(err);
        }
        console.log('Item remove complete');
        Item.create(dataItem, (err,item) => {
            if(err){
                console.log(err);
            } else{
                console.log('Item Added')
            }
        });
    });
}

module.exports = seedDB;