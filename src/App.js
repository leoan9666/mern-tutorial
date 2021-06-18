import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

import Users from "./user/pages/users.pages";
import NewPlace from "./places/pages/new-place.pages";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Users />
        </Route>
        <Route exact path="/places/new">
          <NewPlace />
        </Route>
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
