import  express  from "express";
import web from './routes/web.js'

const app = express()

const port = process.env.PORT || 3000

app.use('/',web)



app.listen(port,()=>{
    console.log(`Server started at http://localhost:${port}`)
})