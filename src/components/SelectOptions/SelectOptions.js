import React from 'react';
import Select from 'react-select';
import './SelectOptions.css';
const SelectOptions = ({ selectedYValue, handleChangeY, handleChangeX, selectedXValue, options }) => {
  return (
    <div className="selectContainer">
      <div className="selectLabel">
        Y:{' '}
        <Select
          className="select"
          placeholder={selectedYValue}
          value={selectedYValue}
          onChange={handleChangeY}
          options={options}
        />
      </div>
      <div className="selectLabel">
        X:{' '}
        <Select
          className="select"
          placeholder={selectedXValue}
          value={selectedXValue}
          onChange={handleChangeX}
          options={options}
        />
      </div>
    </div>
  );
};

export default SelectOptions;
