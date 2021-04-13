import { useEffect, useState } from "react";
import VocabList from "./VocabList";

const initialState = [
    "", ["Loading vocab..."]
]

export default function Vocab() {
    const [vocab, setVocab] = useState(initialState)

    useEffect(() => {
        const outerCard = document.querySelector('.main-card');
        const innerCard = document.querySelector('.main-inner-card');
        const mainTitle = document.querySelector('.main-title');

        
        async function getVocab() {
            let vocabArr = await fetch('/api/vocab');
            vocabArr = await vocabArr.json();
            setVocab(vocabArr);

            outerCard.classList.add('grow');
            innerCard.classList.add('grow');
            mainTitle.classList.add('show');
        }
        getVocab();
        
    },[])
    return (
        <div className="main-container">
            <div className="main-card">
                <h1 className="main-title">Weekly Vocabulary</h1>
                <div className="main-inner-card">
                    <h3>Week 15</h3>
                    <VocabList vocab = {vocab}/>
                </div>
            </div>
        </div>
    )
}
