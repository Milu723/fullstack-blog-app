const router = require('express').Router();
let Post = require('../models/post.model'); // Import the Post model

// --- Define API Endpoints ---

// This route handles GET requests to /api/posts/
// It finds all posts in the database and returns them as JSON.
router.route('/').get((req, res) => {
    Post.find()
        .then(posts => res.json(posts))
        .catch(err => res.status(400).json('Error: ' + err));
});

// This route handles POST requests to /api/posts/add
// It creates a new post with the data from the request body and saves it.
router.route('/add').post((req, res) => {
    const title = req.body.title;
    const content = req.body.content;
    const author = req.body.author;

    const newPost = new Post({
        title,
        content,
        author,
    });

    newPost.save()
        .then(() => res.json('Post added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

// This line is very important. It makes the router available to be used in server.js.
module.exports = router;
