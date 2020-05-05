const express=require('express');
const bodyParser = require('body-parser');
const path=require('path');

//const {sendSignEmail} = require('./contoller/admincontroller');

const app=express();

// const Mongodb=require('mongodb');
// const mongoConnect=require('./database');

app.set('view engin','ejs');
app.set('views','views');

const adminData=require('./routes/admin');
const  ShopRoutes=require('./routes/shop');
const  ForgotRoutes=require('./routes/forgot');
//const ProfileRoutes=require('./routes/profile');

app.use(express.static(path.join(__dirname,'views')));
app.use(bodyParser.urlencoded({extended : false}));

              app.use("/login",(req,res,next) => {
                     res.render("login.ejs",{Login:'login'});
              }); 


              app.use("/admin",adminData);

 app.get("/signup",(req,res,next) =>{
        res.render("signup.ejs");
 });

 app.use("/shop",ShopRoutes);


              app.get("/forgot_password",(req,res,next) =>{
                     res.render("forgot.ejs");
              });

              app.use("/forgot",ForgotRoutes);

app.get("/profile",(req,res,next) =>{
       res.render("profile.htm;");
});

//app.use("/profile",ProfileRoutes);

              app.use("/",(req,res,next) => {
                     res.render("404.ejs");
              }); //


//  mongoConnect(client => {
//         console.log(client);
         app.listen(3000);
//  });
 