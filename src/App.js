import "./App.css";
import React from "react";
import HeaderField from "./components/headerField";
import Login from "./authentication/login";
import Home from "./components/home";
import { Switch, Route } from "react-router-dom";

let headerFields = [
  "WHAT'S NEW",
  "BRANDS",
  "WESTERN WEAR",
  "INDIAN WEAR",
  "BAGS",
  "SHOES",
  "JEWLERRY",
  "LINGERIE",
  "KIDS",
  "MEN",
  "ACCESSORIES",
  "LUXE",
];
let fields = React.createContext(headerFields);
function App(props) {

  return (
    <div className="App">
      <Switch>
        <Route path="/login" component={Login} />
        {headerFields.map((field) => (
          <Route path = {`/:${field}`} key = {field} component = {HeaderField} />
        ))}
        <Route exact path="/" component={Home} />
        </Switch>
    </div>
  );
}

export default App;
export { fields };
