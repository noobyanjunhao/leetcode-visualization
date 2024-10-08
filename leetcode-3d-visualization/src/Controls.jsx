// src/Controls.jsx

import React, { useState } from 'react';
import Select from 'react-select';

const Controls = ({ onFilterChange }) => {
  const options = [
    { value: 'All', label: 'All' },
    { value: 'Array', label: 'Array' },
    { value: 'String', label: 'String' },
    { value: 'Dynamic Programming', label: 'Dynamic Programming' },
  ];

  const handleChange = (selectedOption) => {
    onFilterChange(selectedOption.value);
  };

  return (
    <div style={{ position: 'absolute', top: 20, left: 20, zIndex: 1 }}>
      <Select defaultValue={options[0]} options={options} onChange={handleChange} />
    </div>
  );
};

export default Controls;
