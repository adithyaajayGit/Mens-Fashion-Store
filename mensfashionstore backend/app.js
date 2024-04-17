var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors =require('cors')
global.__basedir = path.resolve(path.dirname(''));


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var login=require('./routes/login');
var districtreg=require('./routes/districtreg');
var districtview=require('./routes/districtview');
var locationreg=require('./routes/locationreg');
var upload=require('./routes/upload');
var brandreg=require('./routes/brandreg');
var categoryreg=require('./routes/categoryreg');
var categoryview=require('./routes/categoryview');
var brandview=require('./routes/brandview');
var productreg=require('./routes/productreg');
var locationview=require('./routes/locationview');
var getdistrict=require('./routes/getdistrict');
var getcategoryandbrandbyid=require('./routes/getcategoryandbrandbyid');
var productview=require('./routes/productview');
var districtdelete=require('./routes/districtdelete');
var locationdelete=require('./routes/locationdelete');
var branddelete=require('./routes/branddelete');
var categorydelete=require('./routes/categorydelete');
var productdelete=require('./routes/productdelete');
var getlocationdetails=require('./routes/getlocationdetails');
var locationedit=require('./routes/locationedit');
var getbrandbyid=require('./routes/getbrandbyid');
var updatebranddata=require('./routes/updatebranddata');
var getcategorydetails=require('./routes/getcategorydetails');
var categoryedit=require('./routes/categoryedit');
var getdistrictdetails=require('./routes/getdistrictdetails');
var districtedit=require('./routes/districtedit');
var getproductdetails=require('./routes/getproductdetails');
var productedit=require('./routes/productedit');
var locationviews=require('./routes/locationviews');
var customerreg=require('./routes/customerreg');
var getproductbycategory=require('./routes/getproductbycategory');
var getproductbybrand=require('./routes/getproductbybrand');
var cartaddproduct=require('./routes/cartaddproduct');
var cartview=require('./routes/cartview');
var carttotal=require('./routes/carttotal');
var cartcheckout=require('./routes/cartcheckout');
// var updateTotalAmount=require('./routes/updateTotalAmount');
var delivery=require('./routes/delivery');
var masterview=require('./routes/masterview');
var payment=require('./routes/payment');
var customerview=require('./routes/customerview');
var datewisereport=require('./routes/datewisereport');
var stockadd=require('./routes/stockadd');
var categorypie=require('./routes/categorypie');
var brandchart=require('./routes/brandchart');
var productreport=require('./routes/productreport');
var paymentreport=require('./routes/paymentreport');
var forgot=require('./routes/forgot');
var userview=require('./routes/userview');
var getcustomerdetails=require('./routes/getcustomerdetails');
var profileedit=require('./routes/profileedit');
var userchangepassword=require('./routes/userchangepassword');
var categorybook=require('./routes/categorybook');
var brandbook=require('./routes/brandbook');
var productbook=require('./routes/productbook');
var recenttrans=require('./routes/recenttrans');
var monthbook=require('./routes/monthbook');
var productdeletea=require('./routes/productdeletea');
var orderview=require('./routes/orderview');




























var app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/login',login);
app.use('/districtview',districtview);
app.use('/districtreg',districtreg);
app.use('/locationreg',locationreg);
app.use('/brandreg',brandreg);
app.use('/upload',upload);
app.use('/categoryreg',categoryreg);
app.use('/categoryview',categoryview);
app.use('/brandview',brandview);
app.use('/productreg',productreg);
app.use('/getdistrict',getdistrict);
app.use('/locationview',locationview);
app.use('/getcategoryandbrandbyid',getcategoryandbrandbyid);
app.use('/productview',productview);
app.use('/districtdelete',districtdelete);
app.use('/locationdelete',locationdelete);
app.use('/branddelete',branddelete);
app.use('/categorydelete',categorydelete);
app.use('/productdelete',productdelete);
app.use('/getlocationdetails',getlocationdetails);
app.use('/locationedit',locationedit);
app.use('/getbrandbyid',getbrandbyid);
app.use('/updatebranddata',updatebranddata);
app.use('/getcategorydetails',getcategorydetails);
app.use('/categoryedit',categoryedit);
app.use('/getdistrictdetails',getdistrictdetails);
app.use('/districtedit',districtedit);
app.use('/getproductdetails',getproductdetails);
app.use('/productedit',productedit);
app.use('/locationviews',locationviews);
app.use('/customerreg',customerreg);
app.use('/getproductbycategory',getproductbycategory);
app.use('/getproductbybrand',getproductbybrand);
app.use('/cartaddproduct',cartaddproduct);
app.use('/cartview',cartview);
app.use('/carttotal',carttotal);
app.use('/cartcheckout',cartcheckout);
// app.use('/updateTotalAmount',updateTotalAmount);
app.use('/delivery',delivery);
app.use('/masterview',masterview);
app.use('/payment',payment);
app.use('/customerview',customerview);
app.use('/datewisereport',datewisereport);
app.use('/stockadd',stockadd);
app.use('/categorypie',categorypie);
app.use('/brandchart',brandchart);
app.use('/productreport',productreport);
app.use('/paymentreport',paymentreport);
app.use('/forgot',forgot);
app.use('/userview',userview);
app.use('/getcustomerdetails',getcustomerdetails);
app.use('/profileedit',profileedit);
app.use('/userchangepassword',userchangepassword);
app.use('/categorybook',categorybook);
app.use('/brandbook',brandbook);
app.use('/productbook',productbook);
app.use('/recenttrans',recenttrans);
app.use('/monthbook',monthbook);
app.use('/productdeletea',productdeletea);
app.use('/orderview',orderview);





































module.exports = app;
