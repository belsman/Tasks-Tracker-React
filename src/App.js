import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';
import TasksList from './features/task/TasksList';
import Login from './features/auth/Login';
import { isUserLogged } from './features/auth/authSlice';

function App() {
  const loggedIn = useSelector(isUserLogged);
  
  if(!loggedIn) {
    return <Login />
  }

  return (
    <div>
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
