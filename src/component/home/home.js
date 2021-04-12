import "./home.css"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function Home() {
    return (
        <div id="Home">
            <div className="title">
                <h1>Picolo</h1>
                <h1 id="title-number">2</h1>
            </div>
            
            <Link id="play" to="/setup1">Play</Link>
        </div>
    )
}

export default Home;