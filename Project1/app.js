import  express  from "express";
import web from './routes/web.js'
const app = express()

const port = process.env.PORT || 3000

// setting template engine 
app.set('view engine','ejs')
app.use(express.static('public'))
app.use('/',web)


app.listen(port,()=>{
    console.log(`Server started at http://localhost:${port}`)
})