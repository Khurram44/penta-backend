const express = require('express')
 //import router
 const router = express.Router()

 //import employee controller
 const UserController = require("../../controllers/Products/products");
 router.get('/', UserController.getList)
 router.get('/:id',UserController.getproductsByID)
 router.get('/list/:sub_category_id',UserController.getproductsBySubID)
 router.post('/',UserController.Addproducts)
//  router.put('/pricing/:hourly_rate',UserController.updateUserPrices)
 
 //export router for getting access
 module.exports = router