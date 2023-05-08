const express =require('express')
const contactRouter = express.Router()

contactRouter.get('/',(request,response)=>{
    response.send("Welcome to Contact Page")
 
  })

module.exports = contactRouter
