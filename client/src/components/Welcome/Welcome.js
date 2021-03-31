import './Welcome.css';
import { useState, useEffect } from 'react';

async function fetchData() {
    const response = await fetch('/api/posts');
    return response.text();
}

function Welcome() {
    const [postPrefix, setPostPrefix] = useState("Didn't get it yet :(")
    const [post, setPost] = useState("")
    
    useEffect(() => {
        fetchData().then(data => {
            setPostPrefix('Got something!');
            setPost(data);
        });
    }, []);
      
  return (
    <div className="App">
      <h1>Korean Web App</h1>
          <p>{ postPrefix }</p>
          <p>{ post }</p>
    </div>
  );
}

export default Welcome;
