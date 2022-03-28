
// import database
var db = require('../../database/database')
//create model/schema for table
var cart_items = function(cart_items) {	
this.id     = cart_items.id;
this.product_id   = cart_items.product_id,
this.cart_id    = cart_items.cart_id
this.user_id    = cart_items.user_id
this.quantity   = cart_items.quantity
this.img    = cart_items.img
this.price_per_item  = cart_items.price_per_item
this.total_price    = cart_items.total_price
this.discount   = cart_items.discount
this.created_on = new Date().toISOString().slice(0, 19).replace('T', ' ')

}   

//Get cart_items model
cart_items.getResult = (result) => {
    db.query('SELECT * from cart_items', (err,res)=>{
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

//Get cart_items by ID model
cart_items.getcart_itemsByID=(id,result)=>{
    db.query('SELECT * from cart_items WHERE id=?',id,(err,res)=>{
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

cart_items.getcart_itemsByCartID=(id,result)=>{
    db.query('SELECT * from cart_items WHERE cart_id=?',id,(err,res)=>{
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


cart_items.createcart_items=(EmpReqData, result)=>{
    db.query('INSERT into cart_items SET ?', EmpReqData,(err,res)=>{
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




module.exports = cart_items