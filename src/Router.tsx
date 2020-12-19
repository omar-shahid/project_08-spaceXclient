import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import Details from "./components/Details";

interface Props {}

const Router: React.FC<Props> = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/:id" exact component={Details} />
      </Switch>
    </BrowserRouter>
  );
};
export default Router;
