import  express  from "express";

const app = express()

const port = process.env.PORT || 3000


// app.get('/student/delete/:id',(req,res)=>{
//     // params is the property for accesing id 
//     console.log(req.params)
//     res.send("student deleted..."+ req.params.id )
// })
app.get('/product/:category/:id',(req,res)=>{
    // params is the property for accesing id 
    console.log(req.params)
    // res.send("Product ")
    const {category,id } = req.params
    // res.send(`Product Category : ${req.params.category} and Product ID : ${req.params.id} `)
    res.send(`Product Category : ${category} and Product ID : ${id} `)


})

// app.get('/flight/:from-:to',(req,res)=>{
//     console.log(req.params)
//     const {from,to} = req.params
//     res.send(`travelling from : ${from} to ${to} `)
// })

app.get('/flight/:from.:to',(req,res)=>{
    console.log(req.params)
    const {from,to} = req.params
    res.send(`travelling from : ${from} to ${to} `)
})


//  Regex

// In this regex user can write 2 digit numbers
app.get('/student/delete/:id([0-9]{2})',(req,res)=>{
    // params is the property for accesing id 
    console.log(req.params)
    res.send("student deleted..."+ req.params.id )
})

app.get('/:type(post|article)/:id',(req,res)=>{
    // params is the property for accesing id 
    console.log(req.params)
    res.send("Post or Article")
})

// Query String 

app.get('/prod',(req,res)=>{

    console.log(req.query)
    const {category,id} = req.query
    res.send(`response okk ${category} `)
})



app.listen(port,()=>{
    console.log(`Server started at http://localhost:${port}`)
})