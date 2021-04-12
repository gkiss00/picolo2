import './App.css';
import { useState } from 'react';
import { data } from "./data/data"

import Home from "./component/home"

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

function App() {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState(data[0]);
  
  return (
    <div className="App">
      <div id="card">
        <p id="question">{text}</p>
      </div>
      <button id="next" onClick={() => {
        if(index < data.length) {
          console.log("increment")
          setIndex(index + 1);
        }
        if(index >= data.length) {
          console.log("reset")
          setIndex(0);
        }  
        setText(getNext(data[index]))
        }}>Next</button>
        
    </div>
  );
}

export default App;
