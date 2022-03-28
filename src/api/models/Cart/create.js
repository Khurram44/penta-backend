
// import database
var db = require('../../database/database')
//create model/schema for table
var cart = function(cart) {	
this.id     = cart.id;
this.user_id   = cart.user_id
this.guest_user_id    = cart.guest_user_id
this.cart_no= cart.cart_no
this.sub_total   = cart.sub_total
this.shippment_price    = cart.shippment_price
this.promocode = cart.promocode
this.discount   = cart.discount
this.grand_total    = cart.grand_total
this.created_on = new Date().toISOString().slice(0, 19).replace('T', ' ')

}   

//Get cart model
cart.getResult = (result) => {
    db.query('SELECT * from cart', (err,res)=>{
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

//Get cart by ID model
cart.getcartByID=(id,result)=>{
    db.query('SELECT * from cart WHERE id=?',id,(err,res)=>{
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

cart.getcartByCartID=(id,result)=>{
    db.query('SELECT * from cart WHERE cart_id=?',id,(err,res)=>{
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


cart.createcart=(EmpReqData, result)=>{
    db.query('INSERT into cart SET ?', EmpReqData,(err,res)=>{
        if(err)
        {
            console.log(err)
            result(null,{status:false, message:err})
        }
        else{
            console.log("Inserted succcessfully")
            result(null,{status:true,message:"Cart created"})
        }
    })

}




module.exports = cart