const UserModel = require('./../database/models/user_model');
const axios = require('axios');

// Save user function that will check if a user already exists in the DB. If not, save.
// Capture auth0 userID
// Check if in DB
// If if in DB do nothing, if not save
// Redirect user to page

async function checkUser (req, res) {
    try {
        let { sub } = req.user;
        let user = await UserModel.findOne({auth0: sub});

        if (user === null) {
            const response = await axios.post(`https://${process.env.AUTH0_DOMAIN}/userinfo`, {}, {
                headers: {
                    "Authorization": req.headers.authorization
                }
            });

            let { nickname, email } = response.data;
            user = new UserModel({auth0: sub, nickname, email});
            await user.save();
        }
        // sessionStorage.setItem("token", req.headers.authorization);

        return res.json(user)
    } catch(err) {
        return res.status(500).json(err);
    }
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