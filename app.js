require('dotenv').config()
const express = require('express')
const app = express()
const PORT = 3500;
const movieDetails = require('./routes/movie')
const mongoose = require('mongoose')
app.use(express.json())
mongoose.connect(process.env.DB_URL)
const db = mongoose.connection
db.on(`error`,errorMessage => console.log(errorMessage))
db.once('open',()=>{
    console.log("Connection established")
})
app.get('/',(request,response)=>{
    response.send("Langing page")
})
app.use('/api/v1/movieDetails',movieDetails)
app.listen(3500,()=>{
    console.log(`Server is Running at http://localhost:${PORT}/`)
})