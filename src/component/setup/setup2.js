import "./setup.css";
import { Link } from "react-router-dom"
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import * as actions from "./../../redux/action/action"

function SetupPlayerNames()  {
        let tab = []; 
        const nbPlayer = useSelector(state => state.nbPlayers)
        const dispatch = useDispatch();

        for (let i = 0; i < nbPlayer; ++i) {
            tab.push(i);
        }
        return (
            <div id="setup2">
                {tab.map(i => {
                    return (
                        <input className="names" type="text" id={"name" + (i + 1)} placeholder={"player" + (i + 1)}></input>
                    )
                })}
                <Link className="link" to="/game" onClick={() => {
                    for (let i = 0; i < nbPlayer; ++i) {
                        const tmp = "name" + (1 + i);
                        const value = document.getElementById(tmp).value;
                        console.log(value);
                        dispatch(actions.addPlayer(value));
                    }
                }}>Next</Link>
            </div>
        )  
}

export default SetupPlayerNames;