import  express  from "express";
import connectDB from "./db/connectdb.js";

import {compDoc, getAllDoc,getAllDocSpecificField, getDocByField, getDocCount, getLimitedDoc, getSingleDoc, getSingleDocSpecificField, getSortedDoc, logDoc, mixDoc } from './models/Student.js'

const app = express()

const port = process.env.PORT || 3000

const DATABASE_URL  = "mongodb://localhost:27017"

// DataBase Connection 
connectDB(DATABASE_URL)

// getAllDoc()
// getAllDocSpecificField() 
// getSingleDoc()
// getSingleDocSpecificField()
// getDocByField()

// getLimitedDoc()

// getDocCount()

// getSortedDoc()

// mixDoc()

// compDoc()

logDoc()



app.listen(port,()=>{
    console.log(`Server started at http://localhost:${port}`)
})