import { useState, useEffect } from 'react';
import "./Resources.css";

export default function Resources() {
    const [resources, setResources] = useState([{"_id":"-1", "title":"Loading..."}]);

    useEffect(() => {
        async function fetchResources() {
            let resourcesArr = await fetch('/api/study-resources/');
            resourcesArr = await resourcesArr.json();
            setResources(resourcesArr);
        }
        fetchResources()
    }, [])
    return (
        <div>    
            <div className="main-container">
                <div className="main-card">
                    <h1 className="main-title">Study Resources</h1>
                    <div className="cards-container">
                        {resources.map(resource => (
                            <div className="inner-card" key={resource._id}>
                                <h3>{resource.title}</h3>
                                <p>{resource.content}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
