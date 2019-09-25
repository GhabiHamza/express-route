const express=require('express')
/*const hbs=require('hbs')*/
const app=express()
/*app.use(express.static(__dirname + '/public/'))*/
    // app.use(date=(req,res,next)=>{
    //      let requestAt=new Date().getHours()
    //     if (requestAt<8 && requestAt>17){
    //         return res.sen
    //     }
    //     else{
    //         app.use(express.static(__dirname + '/public/'))
    //     }
         
    //     next()
    //  })

app.get('/', (req, res) => {
    let requestAt=new Date().getHours()
    if(requestAt < 8 || requestAt < 18){
        return res.sendFile(__dirname + '/public/notopen.html')
    } else {
        return res.sendFile(__dirname + '/public/home.html')
    }
})

app.get('/ourservices', (req, res) => {
    let requestAt=new Date().getHours()
    if(requestAt < 8 || requestAt > 18){
        return res.sendFile(__dirname + '/public/notopen.html')
    } else {
        return res.sendFile(__dirname + '/public/home.html')
    }
})




app.use(express.static(__dirname + '/public/'))



/*app.set('view engine',hbs)
app.get('/connected_user',(req,res)=>{
    res.render('user.hbs',{name:'seif'})
})*/









/*app.use(date=(req,res,next)=>{
    let requestAt=new Date()
    console.log(requestAt)
    next()
})
addrequestDate=(req,res,next)=>{
    let requestAt=new Date()
    console.log(requestAt)
    next()
}


app.get('/user', (req,res)=>{
    
    
    res.send('this is user name')

})
app.get('/products',(req,res)=>{
    res.send({
        telephone:8665446565,
        adresse:'sahloul-sousse'
    })
})
app.get('/about',(req,res)=>{
    res.sendFile(__dirname + '/public/index.html')
})
/*app.use(express.static(__dirname + '/public'))*/





app.listen(3000, (err)=>{
    if(err){
    console.log('server is not running')
    }
    else{
        console.log('server is running in port 3000 ')
    }

})

