http = require("http");

server = http.createServer();

server.listen((port = process.env.port ? process.env.port : 5000), function()
{
  console.log("Listening on port " + port);
  
});
