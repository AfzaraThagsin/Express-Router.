const express =require('express')
const serviceRouter = express.Router()

serviceRouter.get('/',(request,response)=>{
    response.send("Welcome to Service Page")
 
  })

module.exports = serviceRouter
