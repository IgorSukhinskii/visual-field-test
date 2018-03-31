import React from 'react';
import Select from './select';

const gridTypes = [
    { value: '24-2', label: '24-2, 54 points' },
    { value: '30-2', label: '30-2, 76 points' },
];

const SelectGridType = () => (
    <Select
        label="Grid Type"
        options={gridTypes}
    />
);

export default SelectGridType;