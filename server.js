const port = process.env.PORT || 4000;

var http = require("http");
var server = http.Server();

server.listen(port,function(){
  
  console.log("Server is running");

});
