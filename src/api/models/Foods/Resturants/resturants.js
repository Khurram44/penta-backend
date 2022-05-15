
// import database
var db = require('../../../database/database')
//create model/schema for table
var resturants = function(resturants) {

this.id = resturants.id;
this.title = resturants.title
this.message    = resturants.message
this.image  = resturants.image
this.created_at = new Date().toISOString().slice(0, 19).replace('T', ' ')
this.is_deleted     = resturants.is_deleted

}   

//Get resturants model
resturants.getResult = (result) => {
    db.query('SELECT * from resturants', (err,res)=>{
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

//Get resturants by ID model
resturants.getresturantsByID=(id,result)=>{
    db.query('SELECT * from resturants WHERE sub_category_id=?',id,(err,res)=>{
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


resturants.createresturants=(EmpReqData, result)=>{
    db.query('INSERT into resturants SET ?', EmpReqData,(err,res)=>{
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




module.exports = resturants