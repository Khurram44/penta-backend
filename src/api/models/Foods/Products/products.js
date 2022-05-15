
// import database
var db = require('../../../database/database')
//create model/schema for table
var Products = function(Products) {

this.id = Products.id;
this.title = Products.title
this.message    = Products.message
this.image  = Products.image
this.created_at = new Date().toISOString().slice(0, 19).replace('T', ' ')
this.is_deleted     = Products.is_deleted

}   

//Get Products model
Products.getResult = (result) => {
    db.query('SELECT * from food_products', (err,res)=>{
        if(err){
            console.log('error while fetching', err)
            result(null,err)
        }
        else {
            console.log('fetched successfully', res)
            result(null,res)
        }
    })
}

//Get Products by ID model
Products.getProductsByID=(id,result)=>{
    db.query('SELECT * from food_products WHERE id=?',id,(err,res)=>{
        if(err)
        {
            console.log("error while fetching")
            result(null,err)

        }
        else{
            console.log("selected by ID")
            result(null,res)
        }
    })
}


Products.createProducts=(EmpReqData, result)=>{
    db.query('INSERT into food_products SET ?', EmpReqData,(err,res)=>{
        if(err)
        {
            console.log(err)
            result(null,{status:false, message:err})
        }
        else{
            console.log("Inserted succcessfully")
            result(null,{status:true,message:"Success"})
        }
    })

}




module.exports = Products