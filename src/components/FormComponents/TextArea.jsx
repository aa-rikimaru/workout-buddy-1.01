import React from 'react';
import PropTypes from 'prop-types';

const TextArea = (props) => {
  return (
    <div className="form-group">
      <label htmlFor={props.textAreaId}>{props.labelTitle}</label>
      <textarea className="form-control" rows="5" onChange={props.handler} />
    </div>
  );
}

TextArea.propTypes = {
  textAreaId : PropTypes.string,
  labelTitle : PropTypes.string,
  handler : PropTypes.func,
}

TextArea.defaultProps = {
  textAreaId : '0',
  labelTitle : '',
  handler: () => {console.log("TextArea: No handler given!");}
}

export default TextArea;
