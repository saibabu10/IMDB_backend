const {request} = require("express")
const movieModel = require('../models/movie')
const getMovieDetails = async(request,response)=>{
    try{
        const movie = await movieModel.find()
        response.status(200).json(movie)
    }
    catch(error){
        response.status(500).json({message:error.message})
    }
}
const addingMovieInfo = async(request,response)=>{
    const newMovie = new movieModel({
         movieName:request.body.movieName,
        movieGenre:request.body.movieGenre,
     movieLanguage:request.body.movieLanguage,
      releasedYear:request.body.releasedYear,
            rating:request.body.rating
    })
    try{
        const savedMovie = await newMovie.save()
        response.status(200).json(savedMovie)
    }
    catch(error){
        response.status(500).json({message:error.message})
    }
// const getMovieDetailsById = async(request,response)=>{
}
module.exports = {getMovieDetails,
addingMovieInfo}