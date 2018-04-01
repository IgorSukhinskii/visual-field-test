import React from 'react';
import Select from './select';

const algorithms = [
    { value: 'sita-s', label: 'SITA standard' },
    { value: 'sita-f', label: 'SITA fast' },
    { value: 'full-threshold', label: 'Full Threshold' },
];

const SelectAlgorithm = ({className}) => (
    <Select
        label="Algorithm"
        options={algorithms}
        className={className}
    />
);

export default SelectAlgorithm;