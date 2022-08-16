

import  express  from "express";

const router = express.Router()

//  All student routes

router.get('/all',(req,res)=>{
    res.send("all student...")
})
router.post('/create',(req,res)=>{
    res.send("New student created...")
})

router.put('/update',(req,res)=>{
    res.send('Student updated....')
})

router.delete('/delete',(req,res)=>{
    res.send("student deleted...")
})

export default router


// old way of exporting
// module.exports= router  