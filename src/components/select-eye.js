import React from 'react';
import Select from './select';

const eyes = [
    { value: 'left', label: 'Left' },
    { value: 'right', label: 'Right' },
];

const SelectEye = ({className}) => (
    <Select
        label="Eye"
        options={eyes}
        className={className}
    />
);

export default SelectEye;
