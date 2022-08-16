// first express js application

// const express = require('express')

import express from "express";
const app = express();// node http mai callback rahega

const port = process.env.PORT || '3000'
// yatou environment ke port se koibhi uthake chalayega yatou default 3000 pe chalayega

app.get('/', function(request,response){
    response.send("Heyyy Ankit from express js")
})

app.get('/yo', (request,response)=>{
    response.send("Heyyy Ankit from express js at yo url")
})

// app.post('/student/create',(req,res) )

app.listen(port,()=>{
    console.log(`express runningg...............at.... http://localhost:${port}`)
})
