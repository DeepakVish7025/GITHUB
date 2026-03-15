const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
const express = require('express');
const router = express.Router();

const Favorite = require('../models/Favorite');
const {searchRepos} = require('../controllers/search')
const {postFavorites} = require('../controllers/postFavo')
const {getfavorite} = require('../controllers/getfav')
const {deleteFavorite} = require('../controllers/deletefav')



router.get('/search', searchRepos)


// Body: { repoId, name, fullName, owner, ownerAvatar, description, stars, forks, language, url }

router.post('/favorites', postFavorites)



router.get('/favorites', getfavorite)


router.delete('/favorites/:id', deleteFavorite)


module.exports = router;