import React from 'react';
import Select from './select';

const eyes = [
    { value: 'left', label: 'Left' },
    { value: 'right', label: 'Right' },
];

const SelectEye = () => (
    <Select
        label="Eye"
        options={eyes}
    />
);

export default SelectEye;
