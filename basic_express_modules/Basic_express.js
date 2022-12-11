var express=require('express')
var app= express()

app.get('/',function(req,res){
    res.send("Welcome !");
});

var server=app.listen(8000,function(){
    var host=server.address().address;
    var port=server.address().port;
    console.log(host);
    console.log(port);
    console.log("application runs at http://",host,port);
});