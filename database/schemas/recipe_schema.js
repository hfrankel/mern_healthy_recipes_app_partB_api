const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RecipeSchema = new Schema ({
    title: {
        type: String,
        required: true
    },
    summary: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    yield: {
        type: Number,
        required: true
    },
    prepTime: {
        type: Number,
        required: true
    },
    cookTime: {
        type: Number,
        required: true
    },
    ingredients: [IngredientsSchema],
    steps: [StepsSchema],
    isFeatured: {
        type: Boolean,
        required: true
    }
})