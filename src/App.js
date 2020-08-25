import React from 'react';
import './App.scss';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './components/Home/Home';

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/" render={() => <Redirect to="/home" />} />
        <Redirect from="*" to="/" />
      </Switch>
    </div>
  );
}

export default App;
