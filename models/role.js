const { Schema, model } = require("mongoose");

const RolesSchema = Schema({
    role:{
        type: String,
        required: true
    }
});

module.exports = model("Roles", RolesSchema);