const mongoose = require('mongoose')
const movieDetails = new mongoose.Schema({
    movieName:{type:String,required:true,unique:true},
    movieGenre:{type:String,required:true},
  movieLanguage:{type:String,require:true},
  releasedYear:{type:String,require:true},
  rating:{type:Number,require:true}  
})
module.exports = mongoose.model('movieModel',movieDetails)