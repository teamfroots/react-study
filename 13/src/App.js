import React from "react";
import { Route, Link } from "react-router-dom";
import About from "./about";
import Home from "./home";
import Profile from "./Profile";

const App = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/About">ABOUT</Link>
        </li>
        <li>
          <Link to="/Profile/dasom">다솜의 PROFILE</Link>
        </li>
        <li>
          <Link to="/Profile/kkamang">까망의 PROFILE</Link>
        </li>
      </ul>
      <hr />
      <Route path="/" component={Home} exact={true} />
      <Route path={["/about", "/info"]} component={About} />
      <Route path={"/profile/:username"} component={Profile} />
    </div>
  );
};

export default App;
