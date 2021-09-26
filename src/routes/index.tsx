import React from "react";
import { Route, Switch } from "react-router-dom";
import {LandingPage} from "../pages";
function App() {
  return (
    <div>
      {/* Routing */}
      <Switch>
        <Route path="/" exact render={() => <LandingPage/>} />
      </Switch>
    </div>
  );
}
// Exporting App
export default App;
