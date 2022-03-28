var module = require('../../models/Orders/order')

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


exports.getordersByID= (req,res)=>{
   module.getordersByID(req.params.id,(err,orders)=>{
      if(err)
      {
         res.send(err)
      }
      else{
         console.log("Single orders data",orders)
         res.send(orders)
      }

   })
}
exports.getordersByUserID= (req,res)=>{
    module.getordersByUserID(req.params.user_id,(err,orders)=>{
       if(err)
       {
          res.send(err)
       }
       else{
          console.log("Single orders data",orders)
          res.send(orders)
       }
 
    })
 }
 
exports.Addorders=(req,res)=>{
    const data = new module(req.body)   
    console.log("request data", req.body)
 
    if(req.body.constructor === Object && Object.keys(req.body).length===0)
    {
       res.send(400).send({success:false,message:"Please fill up all the fields"})
    }
    else{
       module.createorders(data,(err,emp)=>{
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
