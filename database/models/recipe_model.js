const mongoose = require('mongoose');
const RecipeSchema = require('./../schemas/recipe_schema');

const RecipeModel = mongoose.model('recipe', RecipeSchema);

module.exports = RecipeModel;