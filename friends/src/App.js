import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./App.css";

//components
import Login from "./components/Login";
import FriendsContainer from "./components/FriendsContainer";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/protected">Protected Page</Link>
          </li>
        </ul>
        <Switch />
        <PrivateRoute path="/protected" component={FriendsContainer} />
        <Route path="/login" component={Login} />
        <Route component={Login} />

        <Switch />
      </div>
    </Router>
  );
}

export default App;
