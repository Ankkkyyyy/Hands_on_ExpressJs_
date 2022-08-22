import  express  from "express";
import web from './routes/web.js'
import {join} from 'path'
const app = express()

const port = process.env.PORT || 3000

// loading static css file 

app.use(express.static('public'))
// app.use(express.static(join(process.cwd()  ,'public'))) // Acha tarika yeah hai 
app.use('/static',express.static(join(process.cwd()  ,'public')))

// loading  Routing
app.use('/',web)

app.listen(port,()=>{
    console.log(`Server started at http://localhost:${port}`)
})