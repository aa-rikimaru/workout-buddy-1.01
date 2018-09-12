import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ProgramFormModal from '../Modals/ProgramFormModal.jsx';
import SchemaWorkspace from './SchemaWorkspace.jsx';

import './css/ProgramWorkspace.css';

class ProgramWorkspace extends Component {
  constructor(props) {
    super(props);

    this.state = {
      exerciseName: '',
      program: props.program,
      schema: props.schema
    };

    this.handleProgramNameInput = this.handleProgramNameInput.bind(this);
    this.handleProgramAuthorInput = this.handleProgramAuthorInput.bind(this);
    this.handleExerciseNameChange = this.handleExerciseNameChange.bind(this);
    this.handleNewExercise = this.handleNewExercise.bind(this);
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

  handleExerciseNameChange(e) {
    this.setState({ exerciseName: e.target.value });
  }

  handleNewExercise(e) {
    e.preventDefault();
    let newExercise = {
      name: this.state.exerciseName
    }
    this.setState({
      schema: [newExercise, ...this.state.schema],
      exerciseName: ''
    });
  }

  render() {
    let { program, schema } = this.state;

    return (
      <div className="row">
        <div className="col-10">
          <h2><input onChange={this.handleProgramNameInput} value={program.name}
            className="program-mod-input" placeholder="Program Name" type="text"/></h2>
          <h5><input onChange={this.handleProgramAuthorInput} value={program.author}
            className="program-mod-input" placeholder="Author" type="text"/></h5>
        </div>
        <div className="col-2">
          <div id="program-button-group" className="list-group">
            <ProgramFormModal modalButtonLabel="New" submitHandler={this.handleNewProgram} />
            <div><button className="btn btn-primary">Save</button></div>
          </div>
        </div>
        <div className="col-12">
          <form id="exercise-form" onSubmit={this.handleNewExercise} className="input-group">
            <input
              placeholder="Add Exercise"
              className="form-control"
              value={this.state.exerciseName}
              onChange={this.handleExerciseNameChange}
            />
            <span className="input-group-btn">
              <button type="submit" className="btn btn-secondary">Submit</button>
            </span>
          </form>
        </div>
        <div className="col-12">
          <SchemaWorkspace schema={schema} />
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
