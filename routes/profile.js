const express=require('express');
const bodyParser = require('body-parser');
const path=require('path');
const controller=require("../contoller/profilecontroller");

const adminRouter=express.Router();
//adminRouter.post("/loginsucess",controller.loginsucess);

module.exports=adminRouter;