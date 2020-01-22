const RecipeModel = require("./../database/models/recipe_model")

async function create (req, res) {
    let { id } = req.params
    let { body } = req.body
    let recipe = await RecipeModel.findById(id)
    recipe.comment.push({ body })
    await recipe.save()
    res.redirect(`/recipes/${recipe._id}`)
}

module.exports = {
    create
}