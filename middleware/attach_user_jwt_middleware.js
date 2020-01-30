const UserModel = require('./../database/models/user_model');

module.exports = async function(req, res, next) {
    let { sub } = req.user;
    let user = await UserModel.findOne({auth0: sub});

    if (!user) {
        return next('User not found!');
    }

    req.dbuser = user;

    return next();
}