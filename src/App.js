import React from 'react';
import HomePage from '../src/containers/HomePage';
import './App.css';
import {BrowserRouter as ParentRouter, Switch, Route} from 'react-router-dom';
import CustomerAccessPage from "./containers/customerAccessPage/";

function App() {
  return (
    <div className="app">
        <ParentRouter>
          <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route exact path="/customer/access" component={CustomerAccessPage} />
          </Switch>
        </ParentRouter>
    </div>
  )
}

export default App;
