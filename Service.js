const express =require('express')
const serviceRouter = express.Router()
// serviceRouter.get('/',(req,res)=>{
//     res.send("User Page")
//   })
  serviceRouter.get('/new',(req,res)=>{
    res.render('service/new')
  })
const listofusers = [
    {
       
        'name':'web page'
    },
    {
        
        'name':'mobile application'
    },
     {
       
        'name':'web development'
    },
    {
      
        'name':'laptop service'
    },
    {
       
        'name':'cloud computing'
    },
]
serviceRouter.get('/',(request,response)=>{
    response.send("This is list of Users")
 
  })
  // router.post('/',(req,res)=>{
  //   //console.log(request.body.FirstName)
  //   users.push({name:request.body.FirstName})
  //   res.redirect(`/service/${user.length}`)
  // })

serviceRouter.get('/:id([0-9]{1})',(request,response)=>{
    response.send(`${request.user.name} with id ${request.params.id}`)
 
})

serviceRouter.param('id',(request,response,next,id)=>{
        request.user = listofusers[id]
        console.log(id);
        next()
 
  })

module.exports = serviceRouter
