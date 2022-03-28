var module = require('../../models/Notifications/notification')

exports.getList = (req,res) =>{
   // console.log("complete list here")
   module.getResult((err,emp)=>{
       if(err)
       {
          res.send(err)
       }
       console.log(emp)
       res.send(emp)
   })
}


exports.getnotificationsByID= (req,res)=>{
   module.getnotificationsByID(req.params.id,(err,notifications)=>{
      if(err)
      {
         res.send(err)
      }
      else{
         console.log("Single notifications data",notifications)
         res.send(notifications)
      }

   })
}

exports.Addnotifications=(req,res)=>{
    const data = new module(req.body)   
    console.log("request data", req.body)
 
    if(req.body.constructor === Object && Object.keys(req.body).length===0)
    {
       res.send(400).send({success:false,message:"Please fill up all the fields"})
    }
    else{
       module.createnotifications(data,(err,emp)=>{
          if(err)
          {
             res.send(err)
          }
          else{
             res.json({status:true, message:"Success",data:emp.InsertId})
          }
       })
       console.log("valid data")
    }
 }
