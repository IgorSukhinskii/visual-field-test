import React from 'react';
import Button from 'material-ui/Button';
import SelectAlgorithm from '../components/select-algorithm';
import SelectGridType from '../components/select-grid-type';
import SelectEye from '../components/select-eye';
import SelectPatient from '../components/select-patient';
import { withStyles } from 'material-ui/styles';
import styles from '../styles/form';

const StartTestForm = ({ classes }) => (
    <div className={classes.testForm}>
        <SelectPatient className={classes.field}/>
        <SelectAlgorithm className={classes.field}/>
        <SelectGridType className={classes.field}/>
        <SelectEye className={classes.field}/>
        <Button className={classes.button} variant="raised" color="primary">
            Start test
        </Button>
    </div>
);

export default withStyles(styles)(StartTestForm);
