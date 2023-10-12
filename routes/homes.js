//installing express library
const express = require('express')
//new router instance is created
const router = express.Router()
//requiring our home.js in controllers folder to handle this request
const homeController = require('../controllers/home')

//setting up a route for the root URL, and using a getIndex function from homeController
router.get('/', homeController.getIndex)

//exporting this router to be used in other parts of my application
module.exports = router;