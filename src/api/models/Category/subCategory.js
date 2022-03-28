
// import database
var db = require('../../database/database')
//create model/schema for table
var sub_category = function(sub_category) {

this.id = sub_category.id;
this.name = sub_category.name
this.category_id = sub_category.category_id
this.icon = sub_category.icon


}   

//Get sub_category model
sub_category.getResult = (result) => {
    db.query('SELECT * from sub_category', (err,res)=>{
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

//Get sub_category by ID model
sub_category.getsub_categoryByID=(id,result)=>{
    db.query('SELECT * from sub_category WHERE id=?',id,(err,res)=>{
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

sub_category.getsub_categoryByCatID=(id,result)=>{
    db.query('SELECT * from sub_category WHERE category_id=?',id,(err,res)=>{
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

sub_category.createsub_category=(EmpReqData, result)=>{
    db.query('INSERT into sub_category SET ?', EmpReqData,(err,res)=>{
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




module.exports = sub_category