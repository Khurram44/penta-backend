var module = require('../../models/Category/subCategory')

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
exports.Addsub_category=(req,res)=>{
    const data = new module(req.body)   
    console.log("request data", req.body)
 
    if(req.body.constructor === Object && Object.keys(req.body).length===0)
    {
       res.send(400).send({success:false,message:"Please fill up all the fields"})
    }
    else{
       module.createsub_category(data,(err,emp)=>{
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

exports.getsub_categoryByID= (req,res)=>{
   module.getsub_categoryByID(req.params.id,(err,sub_category)=>{
      if(err)
      {
         res.send(err)
      }
      else{
         console.log("Single sub_category data",sub_category)
         res.send(sub_category)
      }

   })
}
exports.getsub_categoryByCatID= (req,res)=>{
    module.getsub_categoryByCatID(req.params.category_id,(err,sub_category)=>{
       if(err)
       {
          res.send(err)
       }
       else{
          console.log("Single sub_category data",sub_category)
          res.send(sub_category)
       }
 
    })
 }
