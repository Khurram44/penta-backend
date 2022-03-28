
// import database
var db = require('../../database/database')
//create model/schema for table
var Category = function(Category) {




}   

//Get Category model
Category.getResult = (result) => {
    db.query('SELECT * from category', (err,res)=>{
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

//Get Category by ID model
Category.getCategoryByID=(id,result)=>{
    db.query('SELECT * from category WHERE id=?',id,(err,res)=>{
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





module.exports = Category