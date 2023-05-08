const express =require('express')
const serviceRouter = express.Router()

const listofusers = [
    {
        'id':1,
        'name':'web page'
    },
    {
        'id':2,
        'name':'mobile application'
    },
     {
        'id':3,
        'name':'web development'
    },
    {
        'id':4,
        'name':'laptop service'
    },
    {
        'id':5,
        'name':'cloud computing'
    },
]
serviceRouter.get('/',(request,response)=>{
    response.send("This is list of Users")
 
  })

serviceRouter.get('/:id([0-9]{1})',(request,response)=>{
    response.send(request.user.name)
 
})

serviceRouter.param('id',(request,response,next,id)=>{
        request.user = listofusers[id-1]
        console.log(id);
        next()
 
  })
serviceRouter.get('/',(request,response)=>{
    response.send("Welcome to Service Page")
 
  })

module.exports = serviceRouter
