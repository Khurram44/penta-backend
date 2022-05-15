var module = require('../../../models/Foods/Resturants/resturants')

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


exports.getresturantsByID= (req,res)=>{
   module.getresturantsByID(req.params.sub_category_id,(err,resturants)=>{
      if(err)
      {
         res.send(err)
      }
      else{
         console.log("Single resturants data",resturants)
         res.send(resturants)
      }

   })
}

exports.Addresturants=(req,res)=>{
    const data = new module(req.body)   
    console.log("request data", req.body)
 
    if(req.body.constructor === Object && Object.keys(req.body).length===0)
    {
       res.send(400).send({success:false,message:"Please fill up all the fields"})
    }
    else{
       module.createresturants(data,(err,emp)=>{
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
