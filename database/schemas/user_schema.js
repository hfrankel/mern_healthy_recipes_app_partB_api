const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    favouriteRecipes: [Number],
    userRecipes: [Number],
    admin: Boolean
})

module.exports = UserSchema;