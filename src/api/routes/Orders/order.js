const express = require('express')
 //import router
 const router = express.Router()

 //import employee controller
 const UserController = require("../../controllers/Order/order");
 router.get('/', UserController.getList)
 router.get('/:id',UserController.getordersByID)
 router.get('/user/:user_id',UserController.getordersByUserID)
 router.post('/',UserController.Addorders)
//  router.put('/pricing/:hourly_rate',UserController.updateUserPrices)
 
 //export router for getting access
 module.exports = router