import React from 'react';
import PropTypes from 'prop-types';

const ActionButton = (props) => {
  return (
    <button className="ActionButton btn btn-primary" onClick={props.action}>
      {props.buttonName}
    </button>
  );
}

ActionButton.propTypes = {
  buttonName: PropTypes.string,
  action: PropTypes.func,
};

ActionButton.defaultProps = {
  buttonName: 'NoName',
  action: () => {console.log("ActionButton: No action given")},
};

export default ActionButton;
