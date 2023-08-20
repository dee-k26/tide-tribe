import React from 'react';
import { Link } from 'react-router-dom';
import "./Home.css";

const Home = () => {
  // Sample blog post data
  const blogPosts = [
    {
      id: 1,
      title: 'Exploring the Ocean Depths',
      excerpt: 'Dive into the mysteries hidden beneath the waves...',
    },
    {
      id: 2,
      title: 'Sunsets by the Shore',
      excerpt: 'Witness the breathtaking beauty of nature at dusk...',
    },
    // Add more blog posts here...
  ];

  return (
    <div className="home">
      <header className="home-header">
        <h1>Welcome to Tide Tribe</h1>
        <p>Your source for all things ocean and beyond</p>
      </header>
      <section className="blog-list">
        <h2>Latest Posts</h2>
        <ul>
          {blogPosts.map((post) => (
            <li key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
              <Link to={`/blog/${post.id}`}>Read more</Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Home;
