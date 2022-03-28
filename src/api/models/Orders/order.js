
// import database
var db = require('../../database/database')
//create model/schema for table
var orders = function(orders) {
    this.id = orders.id;
    this.cart_id    = orders.cart_id
    this.user_id    = orders.user_id
    this.invoice_no = orders.invoice_no
    this.total_price    = orders.total_price
    this.status   = orders.status
    this.payment_method   = orders.payment_method
    this.accepted_at    = orders.accepted_at
    this.shipped_at  = orders.shipped_at
    this.delivery_date = orders.delivery_date
    this.delivery_time = orders.delivery_time
    this.delivered_at   = orders.delivered_at
    this.completed_at   = orders.completed_at
    this.cancelled_at   = orders.cancelled_at
    this.cancelled_reason   = orders.cancelled_reason
    this.payment_status  = orders.payment_status
// this.created_at = new Date().toISOString().slice(0, 19).replace('T', ' ')

}   

//Get orders model
orders.getResult = (result) => {
    db.query('SELECT * from orders', (err,res)=>{
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

//Get orders by ID model
orders.getordersByID=(id,result)=>{
    db.query('SELECT * from orders WHERE id=?',id,(err,res)=>{
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
orders.getordersByUserID=(id,result)=>{
    db.query('SELECT * from orders WHERE user_id=?',id,(err,res)=>{
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

orders.createorders=(EmpReqData, result)=>{
    db.query('INSERT into orders SET ?', EmpReqData,(err,res)=>{
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




module.exports = orders