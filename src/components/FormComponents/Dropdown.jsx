import React from 'react';
import PropTypes from 'prop-types';

const Dropdown = (props) => {
  const itemList = props.items.map(
    item => {return <option key={item}>{item}</option>;}
  );

  return (
    <div className="form-group">
      <label htmlFor={props.dropdownId}>{props.labelTitle}</label>
      <select className="form-control" onChange={props.handler}>
        {itemList}
      </select>
    </div>
  );
}

Dropdown.propTypes = {
  dropdownId: PropTypes.string,
  labelTitle: PropTypes.string,
  items: PropTypes.array,
  handler: PropTypes.func
};

Dropdown.defaultProps = {
  dropdownId: '',
  labelTitle: 'NoLabelGiven',
  items: [],
  handler: () => {console.log('WARNING! Handler not given!');}
};

export default Dropdown;
