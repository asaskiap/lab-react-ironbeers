import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Beers from './components/beers';
import NewBeer from './components/newBeer';
import RandomBeer from './components/randomBeer';
import Home from './components/home';
import SingleBeer from './components/singleBeer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/beers" component={Beers} exact />
          <Route path="/beers/:id" component={SingleBeer} exact />
          <Route path="/random-beer" component={RandomBeer} exact />
          <Route path="/new-beer" component={NewBeer} exact />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
