import React from "react";
import "./App.scss";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";
import Home from './components/Home/Home';
import Upload from './components/Upload/Upload';



function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route path='/upload'>
          <Upload />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
