var module = require('../../models/Cart/create')

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


exports.getcartByID= (req,res)=>{
   module.getcartByID(req.params.id,(err,cart)=>{
      if(err)
      {
         res.send(err)
      }
      else{
         console.log("Single cart data",cart)
         res.send(cart)
      }

   })
}

exports.getcartByCartID= (req,res)=>{
    module.getcartByCartID(req.params.cart_id,(err,cart)=>{
       if(err)
       {
          res.send(err)
       }
       else{
          console.log("Single cart data",cart)
          res.send(cart)
       }
 
    })
 }
exports.Addcart=(req,res)=>{
    const data = new module(req.body)   
    console.log("request data", req.body)
 
    if(req.body.constructor === Object && Object.keys(req.body).length===0)
    {
       res.send(400).send({success:false,message:"Please fill up all the fields"})
    }
    else{
       module.createcart(data,(err,emp)=>{
          if(err)
          {
             res.send(err)
          }
          else{
             res.json({status:true, message:emp.message,data:emp.InsertId})
          }
       })
       console.log("valid data")
    }
 }
