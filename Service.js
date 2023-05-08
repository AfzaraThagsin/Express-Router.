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
    const pageId = Number(request.params.id)
    
    const userId=listofusers.find((user)=> user.id===pageId)
       
        if(!userId){
            response.send('page not found')
        }
        else{
            response.json(userId.name)
        }
   // response.send(`This is list of Users ${request.params.id}`)
 
  })
serviceRouter.get('/',(request,response)=>{
    response.send("Welcome to Service Page")
 
  })

module.exports = serviceRouter
