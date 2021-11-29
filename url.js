
// const { request } = require('https');
const http =require('http');
const url = require('url');
http.createServer((request, response)=>{
    //passing the url using url module to seperate path and
    //convert query string as an object


    const reqUrl =url.Json.parse(request.url, true);

    console.log("reqUrl", reqUrl);
    console.log("qeery string " ,reqUrl.query);

    response.write('Hello word')
    response.write('Welcome')
    response.write(JSON.stringfy(reqUrl.query));


    response.end()
})
.listen(5000, ()=>{
    console.log("Lisetining to 5000");
})