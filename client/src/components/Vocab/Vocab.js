import { useEffect, useState } from "react";
import VocabList from "./VocabList";

const initialState = [

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
                    <h3>Week 15</h3>
                    <VocabList vocab = {vocab}/>
                </div>
            </div>
        </div>
    )
}
