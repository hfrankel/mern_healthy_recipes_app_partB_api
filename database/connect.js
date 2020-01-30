const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/healthy_recipes_app", { useNewUrlParser: true });
mongoose.Promise = global.Promise;
mongoose.connection.on("error", console.log);

process.env.DB_HOST
