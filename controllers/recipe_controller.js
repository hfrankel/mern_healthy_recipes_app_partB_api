const RecipeModel = require("./../database/models/recipe_model");

// create a recipe
async function create(req, res) {
  try {
    let {
      title,
      description,
      yield,
      prepTime,
      cookTime,
      ingredients,
      steps,
      image
    } = req.body;

    let recipe = await RecipeModel.create({
      title,
      description,
      yield,
      prepTime,
      cookTime,
      ingredients,
      steps,
      user_id: req.dbuser._id,
      image,
      isFlagged: { flagged: false, reasonForFlag: "" }
      // ratings,
      // tags,
    });

    return res.json(recipe);
  } catch (err) {
    return res.status(500).json(err);
  }
}

async function index(req, res) {
  let recipes = await RecipeModel.find().catch(error =>
    res.status(500).send(error)
  );
  res.json(recipes);
}

function make(req, res) {
  res.render("recipe/new");
}

async function show(req, res) {
  console.log(req.params);
  let { id } = req.params;
  let recipe = await RecipeModel.findById(id).catch(error =>
    res.status(500).send(error)
  );
  res.json(recipe);
}

async function destroy(req, res) {
  let { id } = req.params;
  await RecipeModel.findByIdAndRemove(id);
  res.send("successfully deleted");
}

async function edit(req, res) {
  let { id } = req.params;
  let recipe = await RecipeModel.findById(id);
  res.render("recipe/edit", { recipe });
}

async function update(req, res) {
  let {
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
  } = req.body;
  console.log(req.params); // remove after checking
  let { id } = req.params;
  await RecipeModel.findByIdAndUpdate(id, {
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
  });
  res.redirect(`/recipes/${id}`);
}

async function rateRecipe(req, res) {
  try {
    // pull off the recipe id
    let { id } = req.params;
    let user_id = req.dbuser._id;
    // find recipe in the db by its id
    let recipe = await RecipeModel.findOne({ _id: id });
    // if the user_id is already in the ratings array, remove and send back the array length
    if (recipe.ratings.includes(user_id)) {
      const index = recipe.ratings.indexOf(user_id);
      recipe.ratings.splice(index, 1);
      recipe.save();
      res.json(recipe.ratings.length);
      // if the user_id isn't in the array, add it and send back the array length
    } else {
      recipe.ratings.push(user_id);
      recipe.save();
      res.json(recipe.ratings.length);
    }
  } catch (err) {
    return res.status(500).json(err);
  }
}

async function flagRecipe(req, res) {
  let { id } = req.params;
  console.log(id);
  console.log(req.body);
  let { reasonForFlag } = req.body;

  const query = { _id: id };

  const update = {
    isFlagged: {
      flagged: "true",
      reasonForFlag: reasonForFlag
    }
  };

  const options = { returnNewDocument: true };

  try {
    let updatedDocument = await RecipeModel.findOneAndUpdate(
      query,
      update,
      options
    );
    if (updatedDocument) {
      console.log(`Successfully updated document: ${updatedDocument}.`);
    } else {
      console.log("No document matches the provided query.");
    }

    return res.json(updatedDocument);
  } catch (err) {
    return res.status(500).json(err);
  }
}

async function flaggedRecipesIndex(req, res) {
    try {
        // find all recipes
        let recipes = await RecipeModel.find()
        // convert recipes to arr containing recipes data
        let recipeArr = Object.values(recipes);
        // where the flagged recipes will be stored
        let flaggedRecipesArr = [];
        for (let recipe of recipeArr ) {

            if (recipe["isFlagged"]["flagged"] === (true)) {
                flaggedRecipesArr.push(recipe)
            }
        }
        // send back arr with flagged recipes
        return res.json(flaggedRecipesArr);
    } catch(err) {
        return res.status(500).json(err);
    }
}

module.exports = {
  create,
  index,
  make,
  show,
  destroy,
  edit,
  update,
  rateRecipe,
  flagRecipe,
  flaggedRecipesIndex
};
