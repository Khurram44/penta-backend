var module = require('../../models/Cart/cart')

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


exports.getcart_itemsByID= (req,res)=>{
   module.getcart_itemsByID(req.params.id,(err,cart_items)=>{
      if(err)
      {
         res.send(err)
      }
      else{
         console.log("Single cart_items data",cart_items)
         res.send(cart_items)
      }

   })
}

exports.getcart_itemsByCartID= (req,res)=>{
    module.getcart_itemsByCartID(req.params.cart_id,(err,cart_items)=>{
       if(err)
       {
          res.send(err)
       }
       else{
          console.log("Single cart_items data",cart_items)
          res.send(cart_items)
       }
 
    })
 }
exports.Addcart_items=(req,res)=>{
    const data = new module(req.body)   
    console.log("request data", req.body)
 
    if(req.body.constructor === Object && Object.keys(req.body).length===0)
    {
       res.send(400).send({success:false,message:"Please fill up all the fields"})
    }
    else{
       module.createcart_items(data,(err,emp)=>{
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
