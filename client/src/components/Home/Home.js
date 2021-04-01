import './Home.css';
import { useState, useEffect } from 'react';

async function fetchData() {
  const response = await fetch('/api/posts');
  return response.json();
}

function Home() {
    const [postPrefix, setPostPrefix] = useState("Didn't get it yet :(")
    const [post, setPost] = useState("")
    
    useEffect(() => {
      fetchData().then(data => {
        if (data) {
          let output = [];
          for (const entry in data) {
            output.push(<p key={entry}>{entry}: { data[entry]}</p>)
          }
          setPostPrefix('');
          setPost(output);
        }
        });
    }, []);
      
  return (
    <div className="welcome-container">
      <div className="welcome-card">
        <h1 className="site-title">Korean Web App</h1>
        <p>{ postPrefix }</p>
        { post }
      </div>
    </div>
  );
}

export default Home;
