const express = require('express');
const router = express.Router();
const recipeRoutes = require('./recipe_routes');
const userRoutes = require('./user_routes');

router.use('/recipes', recipeRoutes);
router.use('/user', userRoutes);

module.exports = router;