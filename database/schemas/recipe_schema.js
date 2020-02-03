const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const CommentSchema = require('./comment_schema')

const RecipeSchema = new Schema ({
    title: {
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
    ingredients: [],
    steps: [],
    isFeatured: {
        type: Boolean,
    },
    ratings: [],
    isFlagged: {
        flagged: Boolean,
        reasonForFlag: String,
        additionalInfo: String
    },
    tags: [],
    image: {
        type: String,
        // required: true
    },
    comments: [CommentSchema]//,
    // user_id:{
    //     type: Schema.Types.ObjectId,
    //     ref: 'User',
    //     required: true
    // }
})

module.exports = RecipeSchema;