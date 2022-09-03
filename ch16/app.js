import  express  from "express";
import connectDB from "./db/connectdb.js";

const app = express()
const port = process.env.PORT || 3000

// const DATABASE_URI  = "mongodb://localhost:27017/schooldb"
// When their is authentication follow the below approach ! 
// const DATABASE_URI  = "mongodb://express:123456@localhost:27017/schooldb"

// Add authsource - iska mtlb ki kaunse database mai humara user create hua hai !
// const DATABASE_URI  = "mongodb://express:123456@localhost:27017/schooldb/authSource=schooldb"

// more better way is passing all the stuff as an javascript object 
const DATABASE_URI  = "mongodb://localhost:27017"



// mongoose.connect("mongodb://localhost:27017/schooldb").then(()=> {
//     console.log('texting db connection ! -> Connected successfully ! ')
// } )


// DataBase Connection 
connectDB(DATABASE_URI )


app.listen(port,()=>{
    console.log(`Server started at http://localhost:${port}`)
})