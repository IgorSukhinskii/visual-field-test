import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import DateFnsUtils from 'material-ui-pickers/utils/date-fns-utils';
import MuiPickerUtilsProvider from 'material-ui-pickers/utils/MuiPickersUtilsProvider';
import StartTest from './pages/start-test';
import NewPatient from './pages/new-patient';
import TestResults from './pages/test-results';

const App = () => (
  <MuiPickerUtilsProvider utils={DateFnsUtils}>
    <Router>
      <div>
        <Route exact path="/" component={StartTest} />
        <Route path="/add-patient" component={NewPatient} />
        <Route path="/test-results" component={TestResults} />
      </div>
    </Router>
  </MuiPickerUtilsProvider>
);

export default App;
