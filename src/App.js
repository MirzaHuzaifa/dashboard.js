import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './Login';
import Dashboard from './Dashboard';
// import DivisionComponent from './DivisionComponent';

const App = () => {
  return (
    <div >
  
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Login} exact />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
