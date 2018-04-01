import React from 'react';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import DatePicker from '../components/date-picker';
import { withStyles } from 'material-ui/styles';
import styles from '../styles/form';

const NewPatientForm = ({ classes }) => (
    <div className={classes.testForm}>
        <TextField label="Patient name" className={classes.field} />
        <DatePicker label="Patient's birth date" className={classes.field}/>
        <TextField label="Additional notes" className={classes.field}/>
        <Button variant="raised" color="primary" className={classes.button}>
            Add new patient
        </Button>
    </div>
);

export default withStyles(styles)(NewPatientForm);
