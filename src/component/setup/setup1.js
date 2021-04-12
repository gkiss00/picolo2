import { getNodeText } from "@testing-library/react";
import { useState } from "react";
import "./setup.css";
import { Link } from "react-router-dom"
import { Component } from "react";


class SetupNbPlayer extends Component{
    constructor(props) {
        super(props);
        this.state = {
            nbplayer: 2
        }
    }
    render() {
        return (
            <div id="setup">
                <label for="select-number-player">Select the number of player</label>
                <select id="select-number-player" onChange={() => {
                    this.state.nbplayer = document.getElementById("select-number-player").value;
                    console.log(document.getElementById("select-number-player").value);
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
    
}

export default SetupNbPlayer;