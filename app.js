// const express = require('')
// const {} = require('ex')
// import ''

const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
const port = 5000;
const filePath = path.join('config','database.txt');

console.log(filePath)


app.use(express.json());
app.get("/",readStatus);
app.post("/",incrementStatus);

function readStatus(req,res){
    fs.readFile(filePath,'utf-8',(err,data)=>{
        if(err){
            console.log(`Err Reading file ${err}`)
        }
        else{
            return res.json(parseInt(data.trim()));
        }
    })
    
}

function incrementStatus(req,res){
    const data = req.body;
    console.log(data);
    // console.log(data.)
    const status = data.status;
    // console.log(data.status);
    fs.writeFile(filePath,`${status}`,(err,data)=>{
        if(err){
            console.log(`Err Writing File ${err} `);
        }
        else{
            return res.json({
                "success":1,
                "message":"Successfully updated Status"
            })
        }
    })
    // console.log(status);
}

app.listen(port,()=>{
    console.log(`Listening to Port ${port}`);
})
