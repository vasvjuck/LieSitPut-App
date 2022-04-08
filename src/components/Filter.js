import React from 'react';

const Filter = ({ options, value, onChange }) => {
    return (
        <select className='filter'
            value={value}
            onChange={event => onChange(event.target.value)}
        >
            <option disabled value="">Filter by:</option>
            {options.map(option =>
                <option key={option.value} value={option.value}>
                    {option.name}
                </option>
            )}
        </select>
    )
}

export default Filter;