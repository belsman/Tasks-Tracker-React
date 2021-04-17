import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';
import SingleTaskPage from './features/task/SingleTaskPage';
import TasksList from './features/task/TasksList';
import Login from './features/auth/Login';
import { isUserLogged } from './features/auth/authSlice';

import AddMeasurementsWizard from './features/measurements/postmeasurementwizard';

import './styles.css';

function App() {
  const loggedIn = useSelector(isUserLogged);
  
  if(!loggedIn) {
    return <Login />
  }

  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <AddMeasurementsWizard />
          </Route>
          <Route exact path="/tasks" component={TasksList} />
          <Route exact path="/tasks/:taskId" component={SingleTaskPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
