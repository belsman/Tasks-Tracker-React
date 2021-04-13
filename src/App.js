import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';
import TasksList from './features/task/TasksList';
import Login from './features/auth/Login';
import { isUserLogged } from './features/auth/authSlice';

import './App.css';

function App() {
  const loggedIn = useSelector(isUserLogged);
  console.log(loggedIn);
  
  if(!loggedIn) {
    return <Login />
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/">
            <TasksList />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
