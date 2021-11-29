
const users =[
    {
        id:1,
        uname:'Hema',
        age:22
    },
    {
        id:2,
        uname:"Latha",
        age:23
    }

];

const requestHandler = (request, response) =>{
    if(request === "/"){
        response.end("Home Page");
    } else if(request.url === "/login"){
        response.end('<h1>Login Page</h1>')
    }else if(request.url === "/users"){
        const userData =JSON.stringify(users);
        response.end(userData)
    }
}

module.exports ={
    requestHandler
}