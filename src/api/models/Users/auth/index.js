
// import database
var db = require('../../../database/database')
const bcrypt = require ("bcrypt")
const {sign} = require('jsonwebtoken')
//create model/schema for table
var Users = function(users) {

this.id = users.id;
this.email = users.email;
this.first_name = users.first_name;
this.last_name = users.last_name;
this.user_name = users.user_name;
this.gender = users.gender
this.hash   = users.hash;
this.created_at = new Date().toISOString().slice(0, 19).replace('T', ' ')
this.updated_at = new Date().toISOString().slice(0, 19).replace('T', ' ')


}   




//Create model
Users.createUsers=(EmpReqData, result)=>{
    console.log(EmpReqData.email)
    const saltrounds =  10
    const fun = async () =>{
        const hashhash =  await bcrypt.hash(EmpReqData.hash, saltrounds)
    console.log("hased",hashhash)
    EmpReqData.hash = hashhash
    console.log("emp", EmpReqData.hash)

    }
    fun()
    setTimeout(rest,3000)
    
   function rest(){
    db.query('SELECT * FROM users where email = ?', EmpReqData.email,(err,res)=>{
        if(res.length>0)
        {
            console.log(res.hash)
            result(null,{status:false, message:"User Already registered"})
        }
        else{
            db.query('INSERT into users SET ?', EmpReqData,(err,res)=>{
                if(err){
                    console.log(err)
                    result(null,{status:false, message:"Something went wrong"})
                }
                else{
                    console.log(res.hash)
                    console.log("Inserted succcessfully")
            result(null,{status:true,message:"User created"})
                }
            })
        }
    })
   }
  
}

Users.loginUsers = (EmpReqData, result) => {
   let a = db.query('SELECT * FROM users where email = ?', EmpReqData.email,(err,results,res)=>{
        if(results.length>0){
            let validate
            const validation= async ()=>{
                validate = await bcrypt.compare(EmpReqData.hash, results[0].hash)
                if(validate)
                {
                    EmpReqData.hash = undefined;
                    const jsontoken = sign({ result: EmpReqData }, process.env.JWT_SECRET_KEY, {
                      expiresIn: "1h"
                    })
                    result(null,{status:true,message:"Logged in",token:jsontoken})
                }else{
                console.log(results[0].hash, EmpReqData.hash)
                result(null,{status:false,message:"Incorrect hash"})
    }
            }
            validation()
           
        }  else{
            
            console.log("here",results.length)
            result(null,{status:false, message:"User not found"})
        }
    })
}
module.exports = Users