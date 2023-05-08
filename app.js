const express = require('express')
const app = express()
//import first to connect both app and users
const userRouter=require('./Home')
const contactRouter=require('./Contact')
const aboutRouter=require('./About')
const serviceRouter=require('./Service')
const feedbackRouter=require('./Feedback')

//get method  syntax: componentname.HTTPMethodName('path',(handlers))
//handlers means arrow function

app.get('/',(request,response)=>{
  response.send("Welcome to app.js Page")
 
})

//router specify
app.use('/Home',userRouter)
app.use('/Contact',contactRouter)
app.use('/Service',serviceRouter)
app.use('/About',aboutRouter)
app.use('/Feedback',feedbackRouter)

app.listen(4500)

