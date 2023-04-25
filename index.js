const express=require('express');
const port=8000;
const app=express();
const db=require('./config/mongoose');
app.set('view engine','ejs');
app.set('views','./views');
app.use(express.urlencoded());
app.use('/',require('./routes'));
app.listen(port,function(){
    console.log("App is up and running on port",port);
})