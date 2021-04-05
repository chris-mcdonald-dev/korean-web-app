import './Home.css';
import { useState, useEffect } from 'react';

const initialState = [{
  "content": "Loading the fake posts... :("
}]

export default function Home() {
  const [posts, setPostsOutput] = useState(initialState)
    
  useEffect(() => {
    async function fetchPosts() {
      let postsArr = await fetch('/api/posts')
      postsArr = await postsArr.json();
      if (postsArr) {
        setPostsOutput(postsArr);
      }
      else {
        setPostsOutput(<h1>Oh dear. It doesn't look like there are any posts.</h1>);
      }
    }
    fetchPosts();
  }, []);
      
  return (
    <div className="main-container">
      <div className="main-card">
        <h1 className="main-title">Korean Web App</h1>
        {posts.map((post, index) =>(
          <div className="main-inner-card" key={index}>
            <h3>{post.author}</h3>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
