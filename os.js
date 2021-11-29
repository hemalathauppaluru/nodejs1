const os = require('os')


//Architecture of os
console.log('Architecture', os.arch());

//Os platform                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
console.log('Platform', os.platform());

//free memory in bytes
console.log('Free memory', os.freemem());

//total memory in bytes 
console.log('Total memory', os.totalmem());  

//to get cpu info
console.log('Cpu info', os.cpus());

const memInBytes = os.freemem()
const memInKb =memInBytes/1024
const memInMb =memInKb/1024
const memInGb =memInMb/1024
console.log('Mem in kb', Math.floor((memInKb)));
console.log('Mem in mb', Math.floor((memInMb)));
console.log('Mem in gb', Math.floor((memInGb)));