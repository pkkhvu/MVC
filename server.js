//importing installed tools needed for this practice project
const express = require('express')
const app = express()
const connectDB = require('./config/database')
const homeRoutes = require('./routes/homes')
const todoRoutes = require('./routes/todos')

//requiring ENV file containing port number and mongoDB connection string
require('dotenv').config({path: './config/.env'})

//calling function in database.js file
connectDB();


app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//on the root route, use homeRoutes or todoRoutes when a request is heard
app.use('/', homeRoutes)
app.use('/todos', todoRoutes)

app.listen(process.env.PORT, ()=>{
    console.log(`Listening on port: ${PORT}`)
})