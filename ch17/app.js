import  express  from "express";
import connectDB from "./db/connectdb.js";
import "./models/Student.js"
const app = express()

const port = process.env.PORT || 3000

const DATABASE_URI  = "mongodb://localhost:27017"

// DataBase Connection 
connectDB(DATABASE_URI )


app.listen(port,()=>{
    console.log(`Server started at http://localhost:${port}`)
})