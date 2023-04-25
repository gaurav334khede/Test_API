// VrMPN1AJ141HohzV
const mongoose=require('mongoose');
mongoose.connect("mongodb+srv://gauravk:VrMPN1AJ141HohzV@cluster0.lj7mlj3.mongodb.net/testingApi?retryWrites=true")
const db=mongoose.connection;
db.on('error',console.error.bind(console,"error connecting to db"));
db.once('open',function(){
    console.log("Connection with the database is successfull");
})

module.exports=db;