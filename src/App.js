import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './Login';
import Dashboard from './Dashboard';

const App = () => {
  return (
    
      <div>
        <Router>
          
        <Route>
            <Login />
            </Route>
          
            <Route>
            <Dashboard />
            </Route>
            
            </Router>
      </div>
    
  );
};

export default App;
