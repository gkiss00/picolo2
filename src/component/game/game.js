import { useState } from 'react';
import { data } from "./../../data/data"
import "./game.css"
import { useSelector } from 'react-redux';

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
  
function getNext(tmp, players) {
    const names = [...players];
    let k = names.length;
  
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
    const players = useSelector(state => state.players);
    console.log(players);

    document.body.onkeyup = function(e){
        if(e.code === 'Space'){
            if(index < data.length) {
                setIndex(index + 1);
            }
            if(index >= data.length) {
                setIndex(0);
            } 
            const text = getNext(data[index], players)
            setText(text)
        }
    }

    const goNext = (event) => {
        event.preventDefault();
        if(index < data.length) {
            setIndex(index + 1);
        }
        if(index >= data.length) {
            setIndex(0);
        } 
        const text = getNext(data[index], players)
        setText(text)
    }
    return (
        <div id="game">
            <div className="circle" id="c1"></div>
            <div className="circle" id="c2"></div>
            <div id="card" onClick={goNext}>
                <p id="question">{text}</p>
            </div>
        </div>
    )
}

export default Game;