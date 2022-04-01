var module = require('../../models/Products/products')

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

exports.getproductsBySubID= (req,res)=>{
   module.getproductsBySubID(req.params.sub_category_id,(err,products)=>{
      if(err)
      {
         res.send(err)
      }
      else{
         console.log("Single products data",products)
         res.send(products)
      }

   })
}

exports.getproductsByID= (req,res)=>{
   module.getproductsByID(req.params.id,(err,products)=>{
      if(err)
      {
         res.send(err)
      }
      else{
         console.log("Single products data",products)
         res.send(products)
      }

   })
}
exports.Addproducts=(req,res)=>{
   const data = new module(req.body)   
   console.log("request data", req.body)

   if(req.body.constructor === Object && Object.keys(req.body).length===0)
   {
      res.send(400).send({success:false,message:"Please fill up all the fields"})
   }
   else{
      module.createproducts(data,(err,emp)=>{
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