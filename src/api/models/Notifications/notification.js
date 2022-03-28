
// import database
var db = require('../../database/database')
//create model/schema for table
var notifications = function(notifications) {

this.id = notifications.id;
this.title = notifications.title
this.message    = notifications.message
this.image  = notifications.image
this.created_at = new Date().toISOString().slice(0, 19).replace('T', ' ')
this.is_deleted     = notifications.is_deleted

}   

//Get notifications model
notifications.getResult = (result) => {
    db.query('SELECT * from notification', (err,res)=>{
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

//Get notifications by ID model
notifications.getnotificationsByID=(id,result)=>{
    db.query('SELECT * from notification WHERE id=?',id,(err,res)=>{
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


notifications.createnotifications=(EmpReqData, result)=>{
    db.query('INSERT into notification SET ?', EmpReqData,(err,res)=>{
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




module.exports = notifications