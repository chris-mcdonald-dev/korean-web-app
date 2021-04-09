import React from 'react'

export default function ResourceCards(props) {
    const resources = props.resources;
    return (
        <div className="cards-container">
            {resources.map(resource => (
                <div className="inner-card" key={resource._id}>
                    <h3>{resource.title}</h3>
                    <p>{resource.content}</p>
                </div>
            ))}
        </div>
    )
}
