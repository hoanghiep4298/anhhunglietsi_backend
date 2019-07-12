const express = require("express");
const bodyParser = require("body-parser")
const adminRouter = require('./routes/admin.route')
const app = express();

//set header
app.use(function(req, res, next){
	res.setHeader('Content-Type', 'application/json');
	res.setHeader("Access-Control-Allow-Origin","http://huyencuchi.anhhunglietsi.vn");
	res.setHeader("Access-Control-Allow-Credentials","true");
    res.setHeader("Access-Control-Allow-Headers","Content-Type");
    next();
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));


//route
app.use('/admin', adminRouter);  


//Start server
var server = app.listen(3000, function(){
    var port = server.address().port;
    console.log("App dang chay: http://localhost:%s", port);
});
