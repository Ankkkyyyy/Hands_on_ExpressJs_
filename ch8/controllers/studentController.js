

const allStudent  = (req,res)=>{
    res.send("all student !")
}

const deleteStudent = (req,res)=>{
    console.log(req.params)
    const {id}=req.params
    console.log(id)
    if(id == 10){
      return  res.send("Yo Yo this is id of Genius")
    }
   return  res.send(`deleted .. ${id}`)

}

export {allStudent,deleteStudent}

