const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/katApp", { useNewUrlParser: true });
mongoose.Promise = global.Promise;
mongoose.connection.on("error", console.log);
