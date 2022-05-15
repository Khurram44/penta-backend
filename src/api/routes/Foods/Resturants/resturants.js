const express = require('express')
 //import router
 const router = express.Router()

 //import employee controller
 const UserController = require("../../../controllers/Foods/Resturants/resturants");
 router.get('/', UserController.getList)
 router.get('/:sub_category_id',UserController.getresturantsByID)
 router.post('/',UserController.Addresturants)
//  router.put('/pricing/:hourly_rate',UserController.updateUserPrices)
 
 //export router for getting access
 module.exports = router