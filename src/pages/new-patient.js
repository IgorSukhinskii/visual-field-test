import React from 'react';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import DatePicker from '../components/date-picker';

const NewPatientForm = () => (
    <div>
        <TextField label="Patient name" />
        <DatePicker label="Patient's birth date" />
        <TextField label="Additional notes" />
        <Button variant="raised" color="primary">
            Add new patient
        </Button>
    </div>
);

export default NewPatientForm;
