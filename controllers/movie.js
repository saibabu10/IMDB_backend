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
}
   const updateMovieInfo = async(request,response)=>{
    if(request.body.movieName != null){
        response.movie.movieName = request.body.movieName
    }
    if(request.body.movieGenre!= null){
        response.movie.movieGenre = request.body.movieGenre
    }
    if(request.body.movieLanguage != null){
        response.movie.movieLanguage = request.body.movieLanguage
    }
    if(request.body.releasedYear != null){
        response.movie.releasedYear = request.body.releasedYear
    }
    if(request.body.rating != null){
        response.movie.rating = request.body.rating
    }
    try{
        const updateMovie = await response.movie.save()
        response.status(200).json({updateMovie})
    }
    catch(error){
        response.status(401).json({message:error.message})
    }
   } 
   const deleteMovieInfo = async(request,response)=>{
    try{
        await response.movie.deleteOne()
        response.status(200).json({message:`Deleted the Movie Details ${response.movie.movieName}`})
    }catch(error){
        response.status(401).json({message:error.message})
    }
}
    const displayMovieById = async(request,response)=>{
        if(request.body.name != null){
            response.movie.movieName = request.body.movieName
        }
        if(request.body.movieGenre != null){
            response.movie.movieGenre = request.body.movieGenre
        }
        if(request.body.movieLanguage != null){
            response.movie.movieLanguage = request.body.movieLanguage
        }
        if(request.body.releasedYear != null){
            response.movie.releasedYear = request.body.releasedYear
        }
        if(request.body.rating != null){
            response.movie.rating = request.body.rating
        }
        try{
            const updateMovie = await response.movie.save()
            response.status(200).json({updateMovie})
        }
        catch(error){
            response.status(401).json({message:error.message})
        }
       } 
async function validateMovie(request,response,next){
    let movie
    try{
        movie = await movieModel.findById(request.params.id)
        if(movie == null){
            return response.status(404).json({Message:`cannot find Movie Details ${request.param.id}`})
        }
    }
    catch(error){
        return response.status(500).json({Message:error.message})
    }
    response.movie = movie
    next()
    }

module.exports = {getMovieDetails,
addingMovieInfo,
updateMovieInfo,
deleteMovieInfo,
displayMovieById,
validateMovie
}