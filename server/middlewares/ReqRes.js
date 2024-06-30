const fs=require("fs")

function ReqRes(filename){
    return (req,res,next)=>{
        fs.appendFile(filename,`Request Recieved at ${Date.now()}\n`,(err,data)=>{
            next()
        })
    }
}

module.exports={
    ReqRes
}