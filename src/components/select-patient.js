import React from 'react';
import Select from './select';

const patients = [
    { value: '0', label: 'Igor Sukhinskii' },
    { value: '1', label: 'Jane Doe' }
];

const SelectPatient = ({className}) => (
    <Select
        label="Patient"
        options={patients}
        className={className}
    />
);

export default SelectPatient;
