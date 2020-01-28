const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    auth0: {
        type: String,
        required: true
    },
    nickname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    favouriteRecipes: [String],
    userRecipes: [String]
})

module.exports = UserSchema;