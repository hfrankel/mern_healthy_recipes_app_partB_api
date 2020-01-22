const RecipeModel = require('./../database/models/recipe_model');

// create a recipe
async function create (req, res) {
    let { title,
        description,
        yield,
        prepTime,
        cookTime,
        ingredients,
        steps,
        // ratings,
        tags,
        image } = req.body

    let recipe = await RecipeModel.create({
        title,
        description,
        yield,
        prepTime,
        cookTime,
        ingredients,
        steps,
        // ratings,
        tags,
        image
    })
    .catch(error => res.status(500).send(error))
    res.send("success")
}

async function index (req, res) {
    let recipes = await RecipeModel.find()
    res.render("recipe/index", { recipes })
}

function make (req, res) {
    res.render("recipe/new")
}

async function show (req, res) {
    let { id } = req.params
    let recipe = await RecipeModel.findById(id)
    res.render("recipe/show/", { recipe })
}

async function destroy (req, res) {
    let { id } = req.params
    await RecipeModel.findByIdAndRemove(id)
    res.send("successfully deleted")
}

async function edit (req, res) {
    let { id } = req.params
    let recipe = await RecipeModel.findById(id)
    res.render("recipe/edit", { recipe })
}

async function update (req, res) {
    let { title,
        description,
        yield,
        prepTime,
        cookTime,
        ingredients,
        steps,
        // ratings,
        tags,
        image } = req.body
        console.log(req.params) // remove after checking
        let { id } = req.params
        await RecipeModel.findByIdAndUpdate(id, { title,
            description,
            yield,
            prepTime,
            cookTime,
            ingredients,
            steps,
            // ratings,
            tags,
            image })
        res.redirect(`/recipes/${id}`)
}

module.exports = {
    create,
    index,
    make,
    show,
    destroy,
    edit,
    update
}