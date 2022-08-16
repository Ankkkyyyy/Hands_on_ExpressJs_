//  routing

import  express  from "express";

const app = express()

const port = process.env.PORT || 3000


// routes creation

// app.get('/',function(req,res){
//     res.send('Get method')
// })

app.get('/',(req,res)=>{
    res.send('Get method')
})

app.all('/sabkuch',(req,res)=>{
    res.send('all method')
})

// app.all('*',(req,res)=>{
//     res.send("Page Not Found !! ")
// })

app.all('/api/*',(req,res)=>{
    res.send("API Page ")
})


//  String Path 

app.get("/about",(req,res)=>{
    res.send('about page...')
})

// String pattern 

app.get('/ab?cd',(req,res)=>{
    res.send("this route will mtach the path acd & abcd")
})

//  Regular expression path
app.get(/a/,(req,res)=>{
    res.send("as per regular express your link has <b> a </b> ")
})

// one callback 

app.get('/cbeg1',(req,res)=>{
    res.send("one callback example...")
})

// More than 1 callback

app.get('/cbeg2',(req,res,next)=>{
    // res.send("More than 1 callback example...")
    console.log('first callback !!')
    next()
    // yaha pe hum koi normal logic likhke pass karsakte hai ...
},(req,res)=>{
    console.log('Second callback !!')
    res.send("More than 1 callback example...")
})


//  An Array of Callback 

const cb1  = (req,res,next)=>{
    console.log("1st callback")
    next()
}
const cb2  = (req,res,next)=>{
    console.log("2nd callback")
    next()
}
const cb3  = (req,res)=>{
    console.log("3rd callback")
    res.send("An array of callback example...")
}


app.get('/cbeg3',[cb1,cb2,cb3])


//  Combination of independent function and array of function....

const cb11  = (req,res,next)=>{
    console.log("1st callback")
    next()
}
const cb21  = (req,res,next)=>{
    console.log("2nd callback")
    next()
}


app.get('/cbeg4',[cb11,cb21],(req,res,next)=>{
    console.log("3rd Callback !")
    next()
},(req,res)=>{
    console.log("4th Callback !")
    res.send("Combination of independent function and array of function....")
})

// Chained Route Callbacks

app.route('/student')
.all((req,res,next)=>{
    console.log("1st run this for all http method...")
    next()
})
.get((req,res)=>{
    console.log("get")
    res.send("all student...")
})
.post((req,res)=>{

    console.log("post")
    res.send("add new student...")
})
.put((req,res)=>{
    console.log("update")
    res.send(" update")
})
app.listen(port,()=>{
    console.log(`Server started at http://localhost:${port}`)
})