import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Details from "./details";
import SearchParams from "./SearchParams";

// async function componenentDidMount() {
//   const res = await fetch(
//     `http://pets-v2.dev-apis.com/pets?id=1`
//   );

//   const json_data = await res.json();
//   console.log(json_data);
// }

// componenentDidMount();

const App = () => {
  return (
    <div>
      <Router>
        <header>
          <Link to="/">
            <h1>Adopt Me</h1>
          </Link>
        </header>

        <Switch>
          <Route path="/details/:id">
            <Details />
          </Route>
          <Route path="/">
            <SearchParams />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
