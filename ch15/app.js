import  express  from "express";
import connectDB from "./db/connectdb.js";

const app = express()
const port = process.env.PORT || 3000

const DATABASE_URI  = "mongodb://localhost:27017/schooldb"

// mongoose.connect("mongodb://localhost:27017/schooldb").then(()=> {
//     console.log('texting db connection ! -> Connected successfully ! ')
// } )

connectDB(DATABASE_URI )


app.listen(port,()=>{
    console.log(`Server started at http://localhost:${port}`)
})