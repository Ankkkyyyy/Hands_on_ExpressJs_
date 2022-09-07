import  express  from "express";
import connectDB from "./db/connectdb.js";
import "./models/Student.js"
import createDoc from "./models/Student.js";
const app = express()

const port = process.env.PORT || 3000

const DATABASE_URL  = "mongodb://localhost:27017"

// DataBase Connection 
connectDB(DATABASE_URL)

//create & saving document
// createDoc()

createDoc("Genius",22,9999,['reading','geopolitics','mathematics','singing','playing guitar','badminton'],false,[{'value':'this is good mongo'}])



app.listen(port,()=>{
    console.log(`Server started at http://localhost:${port}`)
})