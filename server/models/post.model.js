const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Define the structure of a blog post
const postSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },
    content: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true,
        trim: true
    },
}, {
    timestamps: true, // Automatically adds 'createdAt' and 'updatedAt' fields
});

// Create the model from the schema
const Post = mongoose.model('Post', postSchema);

module.exports = Post;
