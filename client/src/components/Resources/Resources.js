import { useState, useEffect } from 'react';
import "./Resources.css";
import ResourceCards from './ResourceCards';

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
                    <ResourceCards resources={resources}/>
                </div>
            </div>
        </div>
    )
}
