import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';
import MeasurementsList from './features/measurements/MeasurementsList';
import SingleMeasurementPage from './features/measurements/SingleMeasurementPage';
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
          <Route exact path="/records" component={MeasurementsList} />
          <Route exact path="/records/:recordId" component={SingleMeasurementPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
