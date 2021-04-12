import './App.css';
import Home from "./component/home/home"
import Game from "./component/game/game"
import SetupNbPlayer from "./component/setup/setup1"
import SetupPlayerNames from "./component/setup/setup2"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";



function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/setup1">
            <SetupNbPlayer />
          </Route>
          <Route path="/setup2">
            <SetupPlayerNames test={78}/>
          </Route>
          <Route path="/game">
            <Game />
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;