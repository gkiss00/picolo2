import { getNodeText } from "@testing-library/react";
import { useState } from "react";
import "./setup.css";
import { Link, useLocation } from "react-router-dom"
import { Component } from "react";


class SetupPlayerNames extends Component {
    constructor(props) {
        super(props);
        console.log(props)
        this.state = {
            nbPlayer: props.nbplayer
        }
    }
    
    render() {
        let tab = []; 
        let inputs = "";

        for (let i = 0; this.state.nbPlayer < 3; ++i) {
            tab.push(i);
            inputs += <input type="text"></input>
        }
        return (
            <div id="setup2">
                {tab.map(i => {
                    return (
                        <input className="names" type="text" id={"name" + (i + 1)} placeholder={"player" + (i + 1)}></input>
                    )
                })}
                <Link className="link" to="/game">Next</Link>
            </div>
        )
    }
    
}

export default SetupPlayerNames;