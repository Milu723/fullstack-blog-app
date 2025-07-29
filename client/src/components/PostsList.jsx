import React from 'react';

// Accept posts as a prop from the parent component
function PostsList({ posts }) {
    return (
        <div className="posts-list">
            <h2>Latest Posts</h2>
            {posts.length === 0 ? (
                <p>No posts yet. Be the first to create one!</p>
            ) : (
                // Map over the posts received from props
                posts.map(post => (
                    <div key={post._id} className="post-item">
                        <h3>{post.title}</h3>
                        <p>{post.content}</p>
                        <p className="post-author">By: {post.author}</p>
                    </div>
                ))
            )}
        </div>
    );
}

export default PostsList;
