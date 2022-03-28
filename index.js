const express = require('express')
var bodyParser = require('body-parser')
const multer = require("multer");
const path = require("path");
var cors = require('cors')
require('dotenv').config()

// create express app
const app = express()
app.use(cors())

//setting up server port

const port = process.env.PORT || 5000
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// define root routers
app.get('/',(req,res)=>{
    res.send("roots are properly working")
})

//Static folder
app.use("/images", express.static(path.join(__dirname,"/images")))
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "images");
    },
    filename: (req, file, cb) => {
      cb(null, req.body.name);
    },
  });
  const upload = multer({ storage: storage });
  app.post("/api/upload", upload.single("file"), (req, res) => {
    res.status(200).json("File has been uploaded");
  });
  
//Import JWT for Auth
const {checkToken} = require("./src/api/auth/token_validation")
// import the required routes
const userRoutes = require('./src/api/routes/Users/user')
const authRoutes = require('./src/api/routes/Users/auth/index')
const categoryRoutes = require('./src/api/routes/Category/category')
const subCategoryRoutes = require('./src/api/routes/Category/subCategory')
const products = require("./src/api/routes/Products/products")
const notification = require("./src/api/routes/Notifications/notification")
const orders = require("./src/api/routes/Orders/order")
const cart_items = require("./src/api/routes/Cart/cart")
const create_cart = require("./src/api/routes/Cart/create")
//Create routes
app.use('/users',userRoutes)
app.use('/auth', authRoutes)
app.use('/category',categoryRoutes)
app.use('/sub_category',subCategoryRoutes)
app.use('/products',products)
app.use('/notification',notification)
app.use('/orders',orders)
app.use('/cart_items',cart_items)
app.use('/create_cart',create_cart)


//Listening to the port
app.listen(port,()=>{
    console.log("This server is running properly ",port)
})