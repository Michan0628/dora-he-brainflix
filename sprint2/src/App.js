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
import Header from './components/Header/Header'

import Upload from './components/Upload/Upload';
import VideoPage from "./components/VideoPage/VideoPage";



function App() {
  return (
    <Router>
    <Header/>
    <div className="App">
      <Switch>
        <Route path='/videos/:id' component={VideoPage} />

        <Route path='/upload' component={Upload} />
        <Route path='/' component={VideoPage} />

      </Switch>
    </div>
    </Router>
  );
}

export default App;
