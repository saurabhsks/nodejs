var express=require('express')
var app= express()
app.post('/hello', function(req, res){
    res.send("You just called the post method at '/hello'!\n");
 });

 var server=app.listen(8000,function(){
    var host=server.address().address;
    var port=server.address().port;
    console.log(host);
    console.log(port);
    console.log("my server is running at port",host,port);
});