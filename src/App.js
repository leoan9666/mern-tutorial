import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

import Users from "./user/pages/users.pages";
import NewPlace from "./places/pages/new-place.pages";
import MainNavigation from "./shared/components/navigation/main-navigation.component";

const App = () => {
  return (
    <BrowserRouter>
      <MainNavigation />
      <main>
        <Switch>
          <Route exact path="/">
            <Users />
          </Route>
          <Route exact path="/places/new">
            <NewPlace />
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
    </BrowserRouter>
  );
};

export default App;
