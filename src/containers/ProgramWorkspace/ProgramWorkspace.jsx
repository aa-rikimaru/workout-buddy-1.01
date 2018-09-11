import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ProgramFormModal from '../Modals/ProgramFormModal.jsx';

import './css/ProgramWorkspace.css';

class ProgramWorkspace extends Component {
  constructor(props) {
    super(props);

    this.state = {
      program: props.program
    };

    this.handleProgramNameInput = this.handleProgramNameInput.bind(this);
    this.handleProgramAuthorInput = this.handleProgramAuthorInput.bind(this);
    this.handleNewProgram = this.handleNewProgram.bind(this);
  }

  handleProgramNameInput(event) {
    let program = this.state.program;
    program.name = event.target.value;
    this.setState({ program: program });
  }

  handleProgramAuthorInput(event) {
    let program = this.state.program;
    program.author = event.target.value;
    this.setState({ program: program });
  }

  handleNewProgram(newProgram) {
    this.setState({ program: newProgram});
  }

  render() {
    let { name, author } = this.state.program;
    console.log('Name: ', name, 'Author: ', author);

    return (<div className="row">
      <div className="col-10">
        <h2><input onChange={this.handleProgramNameInput} value={name}
          className="program-mod-input" placeholder="Program Name" type="text"/></h2>
        <h5><input onChange={this.handleProgramAuthorInput} value={author}
          className="program-mod-input" placeholder="Author" type="text"/></h5>
      </div>
      <div className="col-2">
        <div id="program-button-group" className="list-group">
          <ProgramFormModal modalButtonLabel="New" submitHandler={this.handleNewProgram} />
          <button className="btn btn-primary">Save</button>
        </div>
      </div>
    </div>)
  }
}

ProgramWorkspace.propTypes = {
  program: PropTypes.object
}

ProgramWorkspace.defaultProps = {
  program: {
    name: '',
    author: '',
    level: 'Beginner',
    description: ''
  }
}

function mapStateToProps(state) {
  return {
    program: state.programs
  }
}

export default connect(mapStateToProps)(ProgramWorkspace);
