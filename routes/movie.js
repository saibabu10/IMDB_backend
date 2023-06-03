const express = require('express')
const router = express.Router()
const {getMovieDetails,addingMovieInfo}=require('../controllers/movie')
router.route('/').get(getMovieDetails).post(addingMovieInfo)
module.exports = router