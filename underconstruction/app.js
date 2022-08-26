import  express  from "express";
import web from './routes/web.js'
import underconstruction from "./middleware/uc-middleware.js";
const app = express()

const port = process.env.PORT || 3000

//  Application Level Middleware

// app.use(underconstruction) // pura webapp mai hie dikhana hai if under development then ese kijiye

//  if koi specific path keliye krna hai tou fir iskeliye ish tarike se likhe see below

app.use('/about',underconstruction)

app.set('view engine','ejs')

app.use('/',web)




app.listen(port,()=>{
    console.log(`Server started at http://localhost:${port}`)
})