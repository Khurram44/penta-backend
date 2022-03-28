const express = require('express')
 //import router
 const router = express.Router()

 //import employee controller
 const UserController = require("../../controllers/Category/subCategory");
 router.get('/', UserController.getList)
 router.get('/:id',UserController.getsub_categoryByID)
 router.get('/category/:category_id',UserController.getsub_categoryByCatID)
 router.post('/',UserController.Addsub_category)
//  router.put('/pricing/:hourly_rate',UserController.updateUserPrices)
 
 //export router for getting access
 module.exports = router