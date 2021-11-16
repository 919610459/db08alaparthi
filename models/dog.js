const mongoose = require("mongoose")
const dogSchema = mongoose.Schema({
    dog_breed: String,
    color: String,
    maxHeight: Number
})
module.exports = mongoose.model("Dog",
    dogSchema)