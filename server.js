const express=require('express');
const app=express();

app.use( date=(req,res,next)=>{

    var requestat= new Date().getHours();
    if ((requestat>8 )   &&  (requestat< 17)  )
    express.static(__dirname+'/public')
    else
    res.send("our office is not working now")

next();

})
    
 
// var requestat= new Date().getHours();

// app.get('/home',(req,res)=>{
//     if ((requestat>8 )   &&  (requestat< 17)  ) res.sendFile(__dirname+ '/public/index.html')
//     else
//     res.send("our office is not working now");
   
    
// })

// app.get ('/contact',(req,res)=>{

//     res.sendFile(__dirname + '/public/contact.html')

// })
// app.get ('/services',(req,res)=>{

//     res.sendFile(__dirname + '/public/ourservices.html')

// })

app.listen(5000,(err)=>{
    if (err){
        console.log("server is not running")
    } else{
        console.log("server is runnig on port 5000")
    }



})