const mongoose = require("mongoose");

const mongoUrl = process.env.MONGO_URI;

mongoose.Promise = global.Promise;
mongoose.set("useFindAndModify", false);
mongoose.connect(mongoUrl);

module.exports = mongoose.connection;
