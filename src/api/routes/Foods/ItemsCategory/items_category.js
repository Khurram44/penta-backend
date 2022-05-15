const express = require('express')
 //import router
 const router = express.Router()

 //import employee controller
 const UserController = require("../../../controllers/Foods/ItemsCategory/items_category");
 router.get('/', UserController.getList)
 router.get('/:resturant_id',UserController.getItemsCategoryByID)
 router.post('/',UserController.AddItemsCategory)
//  router.put('/pricing/:hourly_rate',UserController.updateUserPrices)
 
 //export router for getting access
 module.exports = router