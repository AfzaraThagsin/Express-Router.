const express =require('express')
const feedbackRouter = express.Router()

feedbackRouter.get('/',(request,response)=>{
    response.send("reviews")
 
  })

module.exports =feedbackRouter
