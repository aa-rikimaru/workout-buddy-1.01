import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { saveProgram } from '../../actions/action_programs';

import ProgramFormModal from '../Modals/ProgramFormModal.jsx';

import './css/ProgramWorkspace.css';

class ProgramWorkspace extends Component {
  constructor(props) {
    super(props);

    this.state = {
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

  saveProgram() {
    console.log('Saving program...');
    console.log(this.props.program);
    console.log('Saving schema...');
    console.log(this.props.schema);
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
            <div><button onClick={this.props.saveProgram} className="btn btn-primary">Save</button></div>
            <div><button onClick={this.saveProgram} className="btn btn-btn-primary">SaveState</button></div>
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

function mapStateToProps({program, schema}) {
  return {
    program, schema
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ saveProgram }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ProgramWorkspace);
