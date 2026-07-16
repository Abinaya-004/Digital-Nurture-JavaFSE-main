import React, { Component } from 'react';

// Exercise 4: HOL - Component Lifecycle Methods
// Posts component demonstrating componentDidMount() and componentDidCatch()
class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      loading: true,
      error: null
    };
  }

  // Fetch posts from API
  loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        this.setState({
          posts: data.slice(0, 10), // Display first 10 posts
          loading: false
        });
      })
      .catch(err => {
        this.setState({ error: err.message, loading: false });
      });
  }

  // componentDidMount lifecycle hook - called after component mounts
  componentDidMount() {
    this.loadPosts();
  }

  // componentDidCatch lifecycle hook - handles errors in child components
  componentDidCatch(error, info) {
    alert('An error occurred: ' + error.message);
    console.error('Error caught by componentDidCatch:', error, info);
  }

  render() {
    const { posts, loading, error } = this.state;

    if (loading) {
      return (
        <div style={{ textAlign: 'center', padding: '50px' }}>
          <h2>Loading posts...</h2>
        </div>
      );
    }

    if (error) {
      return (
        <div style={{ color: 'red', padding: '20px' }}>
          <h2>Error: {error}</h2>
        </div>
      );
    }

    return (
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', fontFamily: 'Arial' }}>
        <h1 style={{ color: '#333', borderBottom: '2px solid #667eea', paddingBottom: '10px' }}>
          Blog Posts
        </h1>
        {posts.map(post => (
          <div key={post.id} style={{
            border: '1px solid #ddd',
            borderRadius: '8px',
            padding: '15px',
            marginBottom: '15px',
            backgroundColor: '#f9f9f9',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}>
            <h3 style={{ color: '#667eea', margin: '0 0 10px 0' }}>
              {post.id}. {post.title}
            </h3>
            <p style={{ margin: 0, color: '#555', lineHeight: '1.6' }}>{post.body}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Posts;
