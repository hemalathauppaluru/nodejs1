console.log('program started');
const fs =require('fs')

const readStream = fs.createReadStream('./demo/text.txt',{
    highWaterMark:128*1024,
})
let readData=''
console.log('Readstream', readStream);

readStream.on('open', ()=>{
    console.log('Stream opened...');
    
})

readStream.on('data', (chunk)=>{
    console.log('Buffer');
    // console.log(toString(chunk));
    console.log(chunk.toString());

    // readData +=chunk.toString()
    // console.log('\n');
})

readStream.on('end', ()=>{
    console.log('Stream closed');
    //console.log(readData);
})


setTimeout(()=>{
    const data = readStream.read(1000)
    console.log('10 bytes of data', data);
},1000)

n  ,
//handling error

readStream.on('error', (err)=>{
    console.log('Error');
})

console.log('Program Ended')
