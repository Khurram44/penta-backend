
// import database
var db = require('../../../database/database')
//create model/schema for table
var ItemsCategory = function(ItemsCategory) {

this.id = ItemsCategory.id;
this.title = ItemsCategory.title
this.message    = ItemsCategory.message
this.image  = ItemsCategory.image
this.created_at = new Date().toISOString().slice(0, 19).replace('T', ' ')
this.is_deleted     = ItemsCategory.is_deleted

}   

//Get ItemsCategory model
ItemsCategory.getResult = (result) => {
    db.query('SELECT * from food_items_category', (err,res)=>{
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

//Get ItemsCategory by ID model
ItemsCategory.getItemsCategoryByID=(id,result)=>{
    db.query('SELECT * from food_items_category WHERE resturant_id=?',id,(err,res)=>{
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


ItemsCategory.createItemsCategory=(EmpReqData, result)=>{
    db.query('INSERT into food_items_category SET ?', EmpReqData,(err,res)=>{
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




module.exports = ItemsCategory