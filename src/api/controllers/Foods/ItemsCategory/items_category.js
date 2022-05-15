var module = require('../../../models/Foods/itemsCategory/items_category')

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


exports.getItemsCategoryByID= (req,res)=>{
   module.getItemsCategoryByID(req.params.resturant_id,(err,ItemsCategory)=>{
      if(err)
      {
         res.send(err)
      }
      else{
         console.log("Single ItemsCategory data",ItemsCategory)
         res.send(ItemsCategory)
      }

   })
}

exports.AddItemsCategory=(req,res)=>{
    const data = new module(req.body)   
    console.log("request data", req.body)
 
    if(req.body.constructor === Object && Object.keys(req.body).length===0)
    {
       res.send(400).send({success:false,message:"Please fill up all the fields"})
    }
    else{
       module.createItemsCategory(data,(err,emp)=>{
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
