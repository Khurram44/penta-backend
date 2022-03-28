
// import database
var db = require('../../database/database')
//create model/schema for table
var userss = function(userss) {

this.id = userss.id;
this.user_name = userss.user_name;
this.created_at = new Date().toISOString().slice(0, 19).replace('T', ' ')
this.updated_at = new Date().toISOString().slice(0, 19).replace('T', ' ')
this.first_name = userss.first_name;
this.last_name	    = userss.last_name;
this.email	        = userss.email;
this.phone	        = userss.phone;
this.hash	        = userss.hash;
this.email_is_verified	    = userss.email_is_verified;
this.phone_is_verified	    = userss.phone_is_verified;
this.email_verified_at	    = userss.email_verified_at;
this.phone_verified_at	    = userss.phone_verified_at;
this.profileimg	    = userss.profileimg;
this.gender	    = userss.gender
this.address = userss.address;
this.google_address = userss.google_address;
this.billing_address = userss.billing_address;
this.remember_token = userss.remember_token;
this.dob	    = userss.dob
this.is_active   = userss.is_active
this.is_blocked	  = userss.is_blocked




}   

//Get userss model
userss.getResult = (result) => {
    db.query('SELECT * from users', (err,res)=>{
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

//Get userss by ID model
userss.getuserssByID=(id,result)=>{
    db.query('SELECT * from users WHERE phone=?',id,(err,res)=>{
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


//Create model
userss.createuserss=(EmpReqData, result)=>{
    db.query('INSERT into users SET ?', EmpReqData,(err,res)=>{
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

//Update Model
userss.updateuserss=(id,data,result)=>{

    db.query('UPDATE users SET first_name = ? , last_name = ?  , phone = ?  ,is_active = ?  ,updated_at = ? WHERE id=?',
    [data.first_name , data.last_name ,  data.phone,  data.is_active  ,new Date().toISOString().slice(0, 19).replace('T', ' '),id],(err,res)=>{
        if(err)
        {
            console.log(err)
            result(null,err)
        }
        else
        {
            console.log("success")
            result(null,{status:true,message:"UPDATED",id:res.id})
        }
    })

}
userss.updateBilling=(id,data,result)=>{

    db.query('UPDATE users SET billing_address=? ,updated_at = ? WHERE phone=?',
    [data.billing_address,new Date().toISOString().slice(0, 19).replace('T', ' '),id],(err,res)=>{
        if(err)
        {
            console.log(err)
            result(null,err)
        }
        else
        {
            console.log("success")
            result(null,{status:true,message:"UPDATED",id:res.id})
        }
    })

}

//Delete model
userss.deleteuserss = (id,result)=>{
    db.query('DELETE FROM users WHERE id=?',[id],(err,res)=>{
        if(err)
        {
            console.log("Unable to delete")
            result(null,err)
        }
        else
        {
            console.log("Deleted successfully")
           result(null,res)
        }
    })
}
module.exports = userss