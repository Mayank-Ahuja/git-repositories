var mongoose = require("./connection");
var Schema = mongoose.Schema;

var userSchema = new Schema({
    userName: String,
    Contact: String,
    email: String,
    password: String
}, {
    collection: 'userdatas'
});

var User = mongoose.model("userdatas", userSchema);

module.exports = User;