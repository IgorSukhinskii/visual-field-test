import React from 'react';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import DatePicker from '../components/date-picker';
import SelectAlgorithm from '../components/select-algorithm';
import SelectGridType from '../components/select-grid-type';
import SelectEye from '../components/select-eye';

const StartTestForm = () => (
    <div>
        <TextField
            label="Patient name"
        />
        <DatePicker label="Patient's birth date" />
        <SelectAlgorithm />
        <SelectGridType />
        <SelectEye />
        <Button variant="raised" color="primary">
            Start test
        </Button>
    </div>
);

export default StartTestForm;
