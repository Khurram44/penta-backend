const express = require('express')
 //import router
 const router = express.Router()

 //import employee controller
 const UserController = require("../../controllers/Notifications/notification");
 router.get('/', UserController.getList)
 router.get('/:id',UserController.getnotificationsByID)
 router.post('/',UserController.Addnotifications)
//  router.put('/pricing/:hourly_rate',UserController.updateUserPrices)
 
 //export router for getting access
 module.exports = router