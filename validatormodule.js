const validator =require('validator')

const isValid = validator.isEmail('hema@gmail.com')
console.log("Is Email Validator",isValid);