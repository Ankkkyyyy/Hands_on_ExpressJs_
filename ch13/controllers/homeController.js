

const homeController = (req,res)=>{

    // res.render('index',{'name':"Yo Yo"})
    res.render('index',{'title':'Home'})
}

export {homeController}