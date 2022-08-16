import  express  from "express";

// old way of exporting
// const stu = require('./routes/student')
// const tea = require('./routes/teacher')

import student from "./routes/student.js";
import teacher from "./routes/teacher.js";

const app = express()

const port = process.env.PORT || '3000'

// loading router modules 

app.use("/students",student)

app.use("/teachers",teacher)

app.listen(port,()=>{
    console.log(`Server started at http://localhost:${port}`)
})