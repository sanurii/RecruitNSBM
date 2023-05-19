import mongoose, { Schema } from "mongoose";

const ratingSchema = new Schema({

    email: {
        required: true,
        type: String,
    } ,
    rating: Number,

});

const Rating = mongoose.model('Rating', ratingSchema);

export default Rating;