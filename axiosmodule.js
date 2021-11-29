const axios  = require('axios')
axios
.get('https://jsonplaceholder.typicode.com/posts')
.then((response) =>{
    console.log("data", response.data)
})
.catch((err)=>{
    console.log(err.message);
});