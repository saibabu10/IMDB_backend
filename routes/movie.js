const express = require('express')
const router = express.Router()
const {getMovieDetails,addingMovieInfo,updateMovieInfo,deleteMovieInfo,displayMovieById,validateMovie}=require('../controllers/movie')
router.route('/').get(getMovieDetails).post(addingMovieInfo)
router.route('/:id').get(validateMovie,displayMovieById).patch(validateMovie,updateMovieInfo).delete(validateMovie,deleteMovieInfo)
module.exports = router