const express = require('express')
 //import router
 const router = express.Router()

 //import employee controller
 const UserController = require("../../controllers/Cart/create");
 router.get('/', UserController.getList)
 router.get('/:id',UserController.getcartByID)
 router.get('/cart/:cart_id',UserController.getcartByCartID)
 router.post('/',UserController.Addcart)
//  router.put('/pricing/:hourly_rate',UserController.updateUserPrices)
 
 //export router for getting access
 module.exports = router