var module = require('../../models/Category/category')

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

exports.getCategoryByID= (req,res)=>{
   module.getCategoryByID(req.params.id,(err,Category)=>{
      if(err)
      {
         res.send(err)
      }
      else{
         console.log("Single Category data",Category)
         res.send(Category)
      }

   })
}
