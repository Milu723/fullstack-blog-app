import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CreatePost from './components/CreatePost';
import PostsList from './components/PostsList';
import './App.css';

function App() {
  // State for posts is now in the parent component
  const [posts, setPosts] = useState([]);

  // Function to fetch posts from the API
  const fetchPosts = () => {
    axios.get('http://localhost:5000/api/posts/')
      .then(response => {
        // Sort posts by creation date, newest first
        const sortedPosts = response.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        setPosts(sortedPosts);
      })
      .catch(error => {
        console.log('There was an error fetching the posts:', error);
      });
  };

  // useEffect to fetch posts when the component mounts
  useEffect(() => {
    fetchPosts();
  }, []); // Runs only once on mount

  return (
    <div className="container">
      <header className="app-header">
        <h1>Simple Blog Platform</h1>
      </header>
      
      <main>
        {/* Pass the fetchPosts function down to CreatePost */}
        <CreatePost onPostCreated={fetchPosts} />
        
        {/* Pass the posts array down to PostsList */}
        <PostsList posts={posts} />
      </main>
    </div>
  );
}

export default App;
