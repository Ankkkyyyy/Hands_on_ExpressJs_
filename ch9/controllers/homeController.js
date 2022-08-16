
import {join} from 'path'

const homeController = (req,res)=>{
    // res.send("<h1>Home page <h1>")
    res.sendFile(join(process.cwd(),'views','index.html'))
}

export {homeController}