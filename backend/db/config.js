const mongoose = require('mongoose');
const url = "mongodb://127.0.0.1:27017/";
const database = "e-commerce";
mongoose.connect(url+database);