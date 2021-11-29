

const args = process.argv  //--->command line arguments  we are  giving inputs in command
console.log(args);

if(args[2] ===  'add'){

    console.log('adding');
}else if(args[2] === 'delete'){

    console.log('Deleting');
}