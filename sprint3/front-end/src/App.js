import React from "react";
import "./App.scss";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import Header from "./components/Header/Header";

import UploadForm from "./components/UploadForm/UploadForm";
import VideoPage from "./components/VideoPage/VideoPage";

export default function App() {
  return (
    <Router>
      <Header />
      <div className="App">
        <Switch>
          <Route
            path="/videos/:id"
            render={(routeProps) => {
              return <VideoPage {...routeProps} />;
            }}
          />
          <Route path="/upload" component={UploadForm} />
          <Route exact path="/" component={VideoPage} />
        </Switch>
      </div>
    </Router>
  );
}

