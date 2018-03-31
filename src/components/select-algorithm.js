import React from 'react';
import Select from './select';

const algorithms = [
    { value: 'sita-s', label: 'SITA standard' },
    { value: 'sita-f', label: 'SITA fast' },
    { value: 'full-threshold', label: 'Full Threshold' },
];

const SelectAlgorithm = () => (
    <Select
        label="Algorithm"
        options={algorithms}
    />
);

export default SelectAlgorithm;