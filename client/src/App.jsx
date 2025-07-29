import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CreatePost from './components/CreatePost';
import PostsList from './components/PostsList';
import './App.css';

// !! IMPORTANT !!
// Replace this with your actual live back-end URL from Render
const API_BASE_URL = 'https://my-blog-api-3wsg.onrender.com'; // Use YOUR Render URL

function App() {
  const [posts, setPosts] = useState([]);

  const fetchPosts = () => {
    // Use the live API URL
    axios.get(`${API_BASE_URL}/api/posts/`)
      .then(response => {
        const sortedPosts = response.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        setPosts(sortedPosts);
      })
      .catch(error => {
        console.log('There was an error fetching the posts:', error);
      });
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="container">
      <header className="app-header">
        <h1>Simple Blog Platform</h1>
      </header>
      
      <main>
        <CreatePost onPostCreated={fetchPosts} API_BASE_URL={API_BASE_URL} />
        <PostsList posts={posts} />
      </main>
    </div>
  );
}

export default App;
