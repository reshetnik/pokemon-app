import React from 'react';
import {
    Switch,
    Route
  } from "react-router-dom";

import './App.css';
import Main from './Main.js';
import PokemonItem from './PokemonItem.js'

function App() {
    return (
        <Switch>
            <Route exact path="/">
                <Main />
          </Route>
          <Route path="/:items">
            <PokemonItem/>
          </Route>
        </Switch>
    );
}

export default App;
