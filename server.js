const http =require('http')

const server = http.createServer((request, response)=>{

    // console.log('Request',request);

    // console.log('Response', response);
    console.log("Response was successfull");
    response.end('Welcome to node js')
})


server.listen(2000, ()=>{
    console.log("server is lisetion on port  2000");
})
