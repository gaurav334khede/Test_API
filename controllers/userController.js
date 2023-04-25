const User=require('../models/userSchema');
const bcrypt=require('bcryptjs');
module.exports.createUser=async function(req,res){
    let password=await bcrypt.hash(req.body.password,10);
    let user=await User.create({
        name:req.body.name,
        email:req.body.email,
        password:password
    });
    if(!user || user.length==0){
        return res.status(400).json({
            message:"Error creating User"
        });
    }
    if(user.length>0){
        return res.status(201).json({
            message:"User successfully Created"
        })
    }
    
}
module.exports.home=function(req,res){
    return res.render('home');
}
