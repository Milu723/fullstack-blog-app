import React, { useState } from 'react';
import axios from 'axios';

// Accept the onPostCreated function as a prop
function CreatePost({ onPostCreated }) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [author, setAuthor] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const newPost = {
            title: title,
            content: content,
            author: author
        };

        axios.post('http://localhost:5000/api/posts/add', newPost)
            .then(res => {
                console.log(res.data);
                // Call the function from the parent to re-fetch posts
                onPostCreated(); 
            })
            .catch(error => {
                console.log('There was an error creating the post:', error);
            });

        // Clear the form fields
        setTitle('');
        setContent('');
        setAuthor('');
    };

    return (
        <div className="create-post-form">
            <h2>Create a New Post</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Title:</label>
                    <input
                        type="text"
                        required
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Content:</label>
                    <textarea
                        required
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Author:</label>
                    <input
                        type="text"
                        required
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                    />
                </div>
                <button type="submit" className="submit-btn">Create Post</button>
            </form>
        </div>
    );
}

export default CreatePost;
