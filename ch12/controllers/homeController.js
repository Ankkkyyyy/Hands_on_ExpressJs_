

const homeController = (req,res)=>{
    const data ={
        'name':'Yo Yo',
        'id':10,
        'marks': [90,95,98,99]

       }
    // res.render('index',{'name':"Yo Yo"})
    res.render('index',data)
}

export {homeController}