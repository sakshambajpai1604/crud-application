const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://sakshambajpai:1234@cluster0.p5yvn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

const userSchema = mongoose.Schema({
    image: String,
    email: String,
    name: String
})

module.exports = mongoose.model('User', userSchema);