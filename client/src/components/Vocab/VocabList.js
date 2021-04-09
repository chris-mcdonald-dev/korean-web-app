import React from 'react'

export default function VocabList(props) {
    const vocab = props.vocab;
    return (
        <div className="vocab-list">
            {vocab.map((word, index) => 
                <p key={index}>{word.korean} - {word.english}</p>    
            )}
        </div>
    )
}
