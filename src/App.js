import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AddNewKid from "./Components/AddNewKid";
import Home from "./Home/Home";
import Menu from "./Components/Menu";
import TakePhotoPage from "./Components/TakePhotoPage";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/addnewkid" component={AddNewKid} />
        <Route
          exact
          path="/addnewkid/takephotopage"
          component={TakePhotoPage}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
