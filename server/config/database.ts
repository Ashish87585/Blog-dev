import mongoose from "mongoose";

mongoose.connect('mongodb://localhost:27017/blogdev', {}, (err) => {
    if(err) {
        throw err;
    }
    console.log('Mongodb connection');
})