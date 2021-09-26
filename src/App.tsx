import React from "react";
import { Route, Switch } from "react-router-dom";
import {LandingPage} from "./pages";
import RoutingConfig from './routes/index'
function App() {
  return (
    <>
   <RoutingConfig/>
    </>
  );
}
// Exporting App
export default App;
