import "./setup.css";
import { Link } from "react-router-dom"
import * as actions from "./../../redux/action/action"
import { useDispatch } from 'react-redux'

function SetupNbPlayer(){
    const dispatch = useDispatch();
    dispatch(actions.setNbPlayer(2));

        return (
            <div id="setup">
                <label for="select-number-player">Select the number of player</label>
                <select id="select-number-player" onChange={() => {
                    console.log(document.getElementById("select-number-player").value);
                    dispatch(actions.setNbPlayer(document.getElementById("select-number-player").value));
                }}>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <Link className="link" to={{pathname: "/setup2"}}>Next</Link>
            </div>
        )
}

export default SetupNbPlayer;