const UserModel = require('./../database/models/user_model');

// Save user function that will check if a user already exists in the DB. If not, save.
// Capture auth0 userID
// Check if in DB
// If if in DB do nothing, if not save
// Redirect user to page

async function checkUser (req, res) {
    let { sub, nickname, email } = req.body;
    
    // UserModel.findOneAndUpdate({ })

    let user = await UserModel.findOne({auth0: sub});
    if (user === undefined) {
        user = new UserModel({sub, nickname, email});
    }
    console.log(user);
}

module.exports = {
    checkUser
}

/*
    Save user function that will check if a user already exists in the DB. If not, save.

    Show favourites recipes function that will display a users favourite recipes

    Show featured recipes function that will display the admin's featured recipes

    Show flagged recipes function that will display a user's flagged recipes

    Show all flagged recipes function that will show to the admin all flagged recipes
*/