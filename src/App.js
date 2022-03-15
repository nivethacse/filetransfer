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
            <Header />
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <Switch>
            <Route exact path="/">
              <FileUploadPage />
            </Route>
            <Route path="/about">
              <About />
            </Route>
          </Switch>
        </div>
       
      </Router>
    </div>
  );
};
