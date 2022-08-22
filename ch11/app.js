import  express  from "express";
import  web  from "./routes/web.js";
import { join } from "path";
const app = express()

const port = process.env.PORT || 3000

//  Setting up the directory where template files are located... if the name of folder is not 'views'
// if views ke jageh kuch aur raha tou app.set karo 
// app.set('views','./views')

// setting up template engine to use
app.set('view engine','ejs')

// for setting css
app.use(express.static(join(process.cwd(),'public')))

app.use('/',web)

app.listen(port,()=>{
    console.log(`Server started at http://localhost:${port}`)
})