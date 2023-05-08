const express =require('express')
const aboutRouter = express.Router()

aboutRouter.get('/',(request,response)=>{
    response.send("Welcome to About Page")
 
  })

module.exports = aboutRouter
