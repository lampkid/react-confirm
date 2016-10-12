var app = require('express')();
var http = require('http').Server(app);

var path = require('path');
 
app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get('*.js', function(req, res){
    res.sendFile(path.join(__dirname, "build/main.js"));
});

app.get('*.css', function(req, res){
    res.sendFile(path.join(__dirname, "bootstrap.min.css"));
});
                                           

 
http.listen(3000, function(){
    console.log('listen 3000');
});
