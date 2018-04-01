import React from 'react';
import Button from 'material-ui/Button';
import SelectAlgorithm from '../components/select-algorithm';
import SelectGridType from '../components/select-grid-type';
import SelectEye from '../components/select-eye';
import SelectPatient from '../components/select-patient';

const StartTestForm = () => (
    <div>
        <SelectPatient />
        <SelectAlgorithm />
        <SelectGridType />
        <SelectEye />
        <Button variant="raised" color="primary">
            Start test
        </Button>
    </div>
);

export default StartTestForm;
