import React from "react";
import Landing from "./components/landing/Landing.js";
import Home from "./components/home/Home.js";
import Details from "./components/details/Details";
import Form from "./components/form/Form";
import FullPageLoader from "./components/fullpageloader/FullPageLoader"
import { Route, Switch } from "react-router-dom";

import './App.css';

function App() {
  return (
    <React.Fragment>
        <Switch>
          <Route exact path="/" component={Landing} />          
          <Route exact path="/pokemons" component={Home} />
          <Route exact path="/pokemons/:id" component={Details} />
          <Route exact path="/pokemons/create" component={Form} />
        </Switch>
        <FullPageLoader/>
    </React.Fragment>
  );
}

export default App;
