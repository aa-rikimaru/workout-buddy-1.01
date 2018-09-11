import React, { Component } from 'react';
import { connect } from 'react-redux';

import ProgramFormModal from '../Modals/ProgramFormModal.jsx';

import './css/ProgramWorkspace.css';

class ProgramWorkspace extends Component {
  constructor(props) {
    super(props);

    this.state = {
      program: { name: '', author: ''}
    };

    this.handleProgramNameInput = this.handleProgramNameInput.bind(this);
    this.handleProgramAuthorInput = this.handleProgramAuthorInput.bind(this);
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

  render() {
    let { name, author } = this.state.program;

    return (<div className="row">
      <div className="col-10">
        <h2><input onChange={this.handleProgramNameInput} value={name}
          className="program-mod-input" placeholder="Program Name" type="text"/></h2>
        <h5><input onChange={this.handleProgramAuthorInput} value={author}
          className="program-mod-input" placeholder="Author" type="text"/></h5>
      </div>
      <div className="col-2">
        <div id="program-button-group" className="list-group">
          <ProgramFormModal modalButtonLabel="New"/>
          <button className="btn btn-primary">Save</button>
        </div>
      </div>
    </div>)
  }
}

function mapStateToProps(state) {
  return {
    program: state.program
  }
}

export default connect(mapStateToProps)(ProgramWorkspace);
