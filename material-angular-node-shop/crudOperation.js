var mongo = require("./schemaDefine");

var dbOperations = {
    addUser: function (data, response) {
        var User = require("./schemaDefine");
        User.create(data, function (error, result) {
            if (error) {
                response.json({
                    msg: "User can not be registered at this moment...try again later"
                });
            } else {
                response.json({
                    msg: "user registeration successful...."
                });
            }
        });
    },
    findUser: function (data, response) {
        var User = require("./schemaDefine");
        User.find(data, function (error, docs) {
            if (error) {
                response.json({
                    msg: "error"
                });
            } else {
                response.json({
                    details: docs
                });
            }
        });
    }
}

module.exports = dbOperations;