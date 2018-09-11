import React from 'react';
import PropTypes from 'prop-types';
import './css/Menu.css';

const ProgramMenu = (props) => {
  return (
    <div id="program-menu" className="popup-menu">
        <div className="menu-item d-flex align-items-center">
          <i className="material-icons">add</i>Create
        </div>
        <div className="menu-item d-flex align-items-center">
          <i className="material-icons">edit</i> Edit
        </div>
        <div className="menu-item d-flex align-items-center">
          <i className="material-icons">clear</i> Clear
        </div>
        <div className="menu-item d-flex align-items-center">
          <i className="material-icons">get_app</i> Export
        </div>
    </div>
  );
}

export default ProgramMenu;
