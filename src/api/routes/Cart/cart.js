const express = require('express')
 //import router
 const router = express.Router()

 //import employee controller
 const UserController = require("../../controllers/Cart/cart");
 router.get('/', UserController.getList)
 router.get('/:id',UserController.getcart_itemsByID)
 router.get('/cart/:cart_id',UserController.getcart_itemsByCartID)
 router.post('/',UserController.Addcart_items)
//  router.put('/pricing/:hourly_rate',UserController.updateUserPrices)
 
 //export router for getting access
 module.exports = router