const http =require("http")
const handler = require("./handler.js")


http.createServer(handler.requestHandler).listen(2000, ()=>{
    console.log("Server is Listening on port 2000");
})
