import React from "react";
import { Header } from "./components/Header";
import FileUploadPage from "./FileUploadPage";
import About from "./components/about";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
export const App = () => {
  return (
    <div>
      <Router>
        <div className="App">
        <div class="topnav">
        <Header />
         <Switch>
            <Route exact path="/">
              <FileUploadPage />
            </Route>
            <Route path="/about">
            <About />
            </Route>
          </Switch>
        </div>
        </div>
        
      </Router>
    </div>
  );
};
