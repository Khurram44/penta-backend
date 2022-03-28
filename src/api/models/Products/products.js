
// import database
var db = require('../../database/database')
//create model/schema for table
var products = function(products) {


this.id = products.id;	
this.category_id    = products.category_id;
this.sub_category_id    = products.sub_category_id;
this.this.name  = products.name;
this.description    = products.description;
this.main_image   = products.main_image;
this.availability   = products.availability;
this.price  = products.price;
this.status = products.status;
this.added_on   = products.added_on;
this.updated_on  = products.updated_on;
this.is_deleted = products.is_deleted;
this.brand	    = products.brand;
this.quantity	    = products.quantity;
this.ingredients	    = products.ingredients;
this.fragranced	    = products.fragranced;
this.unit   = products.unit;



}   

//Get products model
products.getResult = (result) => {
    db.query('SELECT * from products', (err,res)=>{
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

//Get products by ID model
products.getproductsByID=(id,result)=>{
    db.query('SELECT * from products WHERE id=?',id,(err,res)=>{
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
products.getproductsBySubID=(id,result)=>{
    db.query('SELECT * from products WHERE sub_category_id=?',id,(err,res)=>{
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
products.getproductsByCatID=(id,result)=>{
    db.query('SELECT * from products WHERE category_id=?',id,(err,res)=>{
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

products.createproducts=(EmpReqData, result)=>{
    db.query('INSERT into products SET ?', EmpReqData,(err,res)=>{
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




module.exports = products