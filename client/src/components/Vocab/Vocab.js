import { useEffect, useState } from "react";
import VocabList from "./VocabList";
import VocabWeek from "./VocabWeek";

const initialState = [
    "", ["Loading vocab..."]
]

export default function Vocab() {
    const [vocab, setVocab] = useState(initialState)

    useEffect(() => {

        async function getVocab() {
            let vocabArr = await fetch('/api/vocab');
            vocabArr = await vocabArr.json();
            setVocab(vocabArr);
        }
        getVocab();
        
    },[])
    return (
        <div className="main-container">
            <div className="main-card">
                <h1 className="main-title">Weekly Vocabulary</h1>
                <div className="main-inner-card">
                    <VocabWeek />
                    <div className="vocab-line"></div>
                    <VocabList vocab = {vocab}/>
                </div>
            </div>
        </div>
    )
}
