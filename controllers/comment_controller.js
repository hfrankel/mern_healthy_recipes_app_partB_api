const RecipeModel = require("./../database/models/recipe_model")

async function create (req, res) {
    try {
        let { id } = req.params
        let { body, nickname } = req.body
        let recipe = await RecipeModel.findById(id)
        console.log(recipe)
        recipe.comments.push({body, nickname})
        console.log(recipe)
        await recipe.save()
        return res.json(recipe.comments[recipe.comments.length-1]); // send back the last comment in the comment array
        //return res.json(recipe)
    } catch(err) {
        return res.status(500).json(err);
    }
}

module.exports = {
    create
}