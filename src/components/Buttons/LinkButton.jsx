import React from 'react';
import PropTypes from 'prop-types';

const LinkButton = (props) => {
  return (
    <button className="LinkButton btn btn-primary" onClick={props.action}>
      {props.buttonName}
    </button>
  );
}

LinkButton.propTypes = {
  buttonName: PropTypes.string,
  action: PropTypes.func,
};

LinkButton.defaultProps = {
  buttonName: 'NoName',
  action: () => {console.log("LinkButton: No action given")},
};

export default LinkButton;
