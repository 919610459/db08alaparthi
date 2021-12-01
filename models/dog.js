const mongoose = require("mongoose")
const dogSchema = mongoose.Schema({
    dog_breed: String,
    color: {type:String,length:9},
    maxHeight: {type:Number,min:1,max:10}
})
module.exports = mongoose.model("Dog",
    dogSchema)
