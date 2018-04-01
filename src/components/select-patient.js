import React from 'react';
import Select from './select';

const patients = [
    { value: '0', label: 'Igor Sukhinskii' },
    { value: '1', label: 'Jane Doe' },
];

const SelectPatient = () => (
    <Select
        label="Patient"
        options={patients}
    />
);

export default SelectPatient;
