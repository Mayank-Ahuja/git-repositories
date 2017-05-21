var mongoose = require("mongoose");
var dbConfig = require("./dbConfig");

mongoose.connect(dbConfig.dbUrl);
module.exports = mongoose;