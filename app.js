const express = require('express')
const app = express()
//import first to connect both app and users
const userRouter=require('./Home')
const contactRouter=require('./Contact')
const aboutRouter=require('./About')
const serviceRouter=require('./Service')
const feedbackRouter=require('./Feedback')
app.set('view engine','ejs')

//get method  syntax: componentname.HTTPMethodName('path',(handlers))
//handlers means arrow function
app.use(express.urlencoded({extended:true}))

app.get('/',(request,response)=>{
  response.render('index')
  //response.send('welcome to App.js page')
 
})

//router specify
app.use('/Home',userRouter)
app.use('/Contact',contactRouter)
app.use('/Service',serviceRouter)
app.use('/About',aboutRouter)
app.use('/Feedback',feedbackRouter)

app.listen(4500)

