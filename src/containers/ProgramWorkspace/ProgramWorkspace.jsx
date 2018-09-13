import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ProgramFormModal from '../Modals/ProgramFormModal.jsx';

import './css/ProgramWorkspace.css';

class ProgramWorkspace extends Component {
  constructor(props) {
    super(props);

    this.state = {
      exerciseName: '',
      program: props.program,
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
    let { program } = this.state;

    return (
      <div className="row">
        <div className="col-10">
          <h2><input onChange={this.handleProgramNameInput} value={program.name}
            className="program-mod-input" placeholder="Program Name" type="text"/></h2>
          <h5><input onChange={this.handleProgramAuthorInput} value={program.author}
            className="program-mod-input" placeholder="Author" type="text"/></h5>
        </div>
        <div className="col-2">
          <div id="program-button-group" className="list-group align-items-end">
            <ProgramFormModal className="list-group-item" modalButtonLabel="New" submitHandler={this.handleNewProgram} />
            <div><button className="btn btn-primary">Save</button></div>
          </div>
        </div>
      </div>
    )
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
    description: '',
  },
  schema: []
}

function mapStateToProps(state) {
  return {
    program: state.programs
  }
}

export default connect(mapStateToProps)(ProgramWorkspace);
