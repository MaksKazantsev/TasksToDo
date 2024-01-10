import React from 'react';

const MySelect = ({options, defaultValue, value, onChange}) => {
    return (
        <select value={value} onChange={e => onChange(e.target.value)}>
            <option value="vlue1" disabled>{defaultValue}</option>
            {options.map(option =>
                <option value={option.value} key={option.value}>
                    {option.name}
                </option>
            )}
        </select>
    );
};

export default MySelect;