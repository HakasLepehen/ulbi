import React from 'react';

const Select = ({options, defaultValue, value, onChangeValue}) => {
    return (
        <select
            value={value}
            onChange={event => onChangeValue(event.target.value)}
        >
            <option disabled value="">{defaultValue}</option>
            {options.map(option =>
            <option value={option.value} key={option.value}>{option.name}</option>
            )}
        </select>
    );
};

export default Select;