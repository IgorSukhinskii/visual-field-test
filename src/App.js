import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import DateFnsUtils from 'material-ui-pickers/utils/date-fns-utils';
import MuiPickerUtilsProvider from 'material-ui-pickers/utils/MuiPickersUtilsProvider';
import StartTest from './pages/start-test';

const App = () => (
  <MuiPickerUtilsProvider utils={DateFnsUtils}>
    <Router>
      <Route exact path="/" component={StartTest} />
    </Router>
  </MuiPickerUtilsProvider>
);

export default App;
