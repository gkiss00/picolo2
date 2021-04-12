import { useState } from 'react';
import { data } from "./../../data/data"
import "./game.css"

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
  
function getNext(tmp) {
    const names = ["Dalia", "Gautier", "Sacha", "Suzana"];
    let k = 3;
  
    while (tmp.search("...") >= 0 && k > 0){
        const i = getRandomInt(names.length)
        tmp = tmp.replace("...", names[i])
        names.splice(i, 1);
        --k;
    }
    return (tmp);
}

function Game() {
    const [index, setIndex] = useState(0);
    const [text, setText] = useState(data[0]);

    document.body.onkeyup = function(e){
        if(e.code == 'Space'){
            if(index < data.length) {
                console.log("increment")
                setIndex(index + 1);
            }
            if(index >= data.length) {
                console.log("reset")
                setIndex(0);
            } 
            setText(getNext(data[index]))
        }
    }
    console.log(data.length, index);
    return (
        <div id="game">
            <div className="circle" id="c1"></div>
            <div className="circle" id="c2"></div>
            <div id="card">
                <p id="question">{text}</p>
            </div>
        </div>
    )
}

export default Game;