import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './views/home'
import Page01 from './views/page01'
import Page02 from './views/page02'
import Page03 from './views/page03'
import Page04 from './views/page04'
import Page05 from './views/page05'
import Page06 from './views/page06'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/commathproject/page01">
          <Page01/>
        </Route>
        <Route path="/commathproject/page02">
          <Page02/>
        </Route>
        <Route path="/commathproject/page03">
          <Page03/>
        </Route>
        <Route path="/commathproject/page04">
          <Page04/>
        </Route>
        <Route path="/commathproject/page05">
          <Page05/>
        </Route>
        <Route path="/commathproject/page06">
          <Page06/>
        </Route>
        <Route path="/commathproject/home">
          <Home/>
        </Route>
        
        <Route path="/">
          <Redirect to="/commathproject/home" />
        </Route>

      </Switch>
    </BrowserRouter>
  );
}

export default App;
