import React from 'react';
import PropTypes from 'prop-types';

const Input = (props) => {
  return (
    <div className="form-group">
      <label htmlFor={props.inputId}>{props.labelTitle}</label>
      <input className="form-control" type="text"
        id={props.inputId}
        placeholder={props.inputPlaceHolder}
        onChange={props.handler}
        />
    </div>
  );
}

Input.propTypes = {
  inputId: PropTypes.string,
  labelTitle: PropTypes.string,
  placeHolder: PropTypes.string,
  handler: PropTypes.func,
};

Input.defaultProps = {
  inputId: '',
  labelTitle: 'NoLabelGiven',
  placeHolder: '',
  handler: () => {console.log('WARNING! Handler not given!');}
};

export default Input;
