console.log("program started");

const fs= require('fs')
//console.log(fs);

if(!fs.existsSync("demo")){
fs.mkdirSync('demo')
}

// try{
//     fs.mkdirSync("demo")
// } catch(err){
//     console.log(err);0
// }
fs.writeFileSync('demo/text.txt', 'Hellow World')

if(fs.existsSync(demo/test.txt)){
const data= fs.readFileSync('demo/test.txt')
console.log(data);
console.log(data.toString());
}
console.log('Program End');