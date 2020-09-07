import React from "react";
import { Route } from "react-router-dom";
import About from "./about";
import Home from "./home";

const App = () => {
  return (
    <div>
      <Route path="/" component={Home} exact={true} />
      <Route path="/about" component={About} />
    </div>
  );
};

export default App;
