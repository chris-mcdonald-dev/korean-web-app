import React from 'react';
import './Vocab.css';

export default function VocabList(props) {
    const vocab = props.vocab;
    return (
        <div className="vocab-list">
            {vocab.map((word, index) => {
                if (index === 0) return;
                return <p key={word}>{word[0]} - {word[1]}</p>    
            })}
        </div>
    )
}
