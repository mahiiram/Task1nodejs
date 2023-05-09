const filecontroller = require("express").Router();
const filesystem = require('fs');
const path = require('path');
const { getFilename } = require("../Utils/calender");
// path.join("../","fileSystem","notes.txt");


filecontroller.post("/createfilesystem", (req,res,next) =>{  
    const notes = `./fileSystem/${getFilename(new Date())}`;

    filesystem.writeFileSync(notes,"Creating a file with current Timestamp")
        res.status(200).json({
       message:"File created successfully"
    })

})



module.exports = filecontroller;