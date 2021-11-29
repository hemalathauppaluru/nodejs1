const fs = require("fs");

console.log("Program Strated");

const writeData = () => {
  fs.writeFile("view/view.txt", "Welcom to node js", (fileErr) => {
    if (fileErr) {
      console.log("File err", fileErr);
    } else {
      console.log("Data written Successfully");


      fs.readFile("view/view.txt", (err,data) =>{
        if(err){
            console.log("err", err);
        } else{
            console.log(data.toString());
        }
    })
    }
  });
};

  fs.exists("view", (exists) => {
    if (!exists) {
      fs.mkdir("view", (err) => {
        if (err) {
          console.log("the folder is not created", err);
        } else {
          console.log("the folder is created successfully");
          writeData();
        }
      });
    } else {
      writeData();
    }
  });


  console.log("program ended");
