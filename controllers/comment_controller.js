const RecipeModel = require("./../database/models/recipe_model")

async function create (req, res) {
    // console.log("*******************");
    // console.log(req.dbuser);
    // console.log("*******************");
    try {
        let { id } = req.params
        let { body } = req.body
        let { nickname } = req.dbuser;
        let recipe = await RecipeModel.findById(id)
        console.log(recipe)
        recipe.comments.push({body, nickname})
        await recipe.save()
        return res.json(recipe.comments[recipe.comments.length-1]); // send back the last comment in the comment array
    } catch(err) {
        return res.status(500).json(err);
    }
}

module.exports = {
    create
}