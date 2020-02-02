const express = require('express');
const router = express.Router();
const RecipeController = require('../controllers/recipe_controller');
const CommentController = require('../controllers/comment_controller');
const checkJWT = require('./../middleware/check_jwt_middleware');
const attachUser = require('./../middleware/attach_user_jwt_middleware');

router.get('/', RecipeController.index);

router.post('/', checkJWT, attachUser, RecipeController.create);

router.post('/:id/comment', CommentController.create); // add authentication + authorization later

router.post('/:id/:user_id', RecipeController.rateRecipe);

router.get('/new', RecipeController.make);

router.get('/:id', RecipeController.show);

router.get('/:id/edit', RecipeController.edit);

router.patch('/:id', RecipeController.update);

router.put('/:id', RecipeController.update);

router.delete('/:id', RecipeController.destroy);

module.exports = router;
