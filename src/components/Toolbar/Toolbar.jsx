import React from 'react';
import './Toolbar.css';

const Toolbar = ({ filters, selected, onSelectFilter }) => {
  return (
    <div className="filters__wrapper">
      {filters.map((filter, idx) => (
        <div
          key={idx}
          className="filters__item"
          style={{
            backgroundColor: selected === filter && 'black',
            color: selected === filter && 'white',
          }}
          onClick={() => onSelectFilter(filter)}
        >
          {filter}
        </div>
      ))}
    </div>
  );
};

export default Toolbar;
