const express = require('express')
 //import router
 const router = express.Router()

 //import employee controller
 const UserController = require("../../../controllers/Foods/Products/products");
 router.get('/', UserController.getList)
 router.get('/:id',UserController.getProductsByID)
 router.post('/',UserController.AddProducts)
//  router.put('/pricing/:hourly_rate',UserController.updateUserPrices)
 
 //export router for getting access
 module.exports = router