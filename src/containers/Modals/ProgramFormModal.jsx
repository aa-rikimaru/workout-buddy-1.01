import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dropdown from '../../components/FormComponents/Dropdown.jsx';
import Input from '../../components/FormComponents/Input.jsx';
import TextArea from '../../components/FormComponents/TextArea.jsx';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { newProgram } from '../../actions/action_programs';

const FormModal = (props) => {
  const programLevels = ['Beginner', 'Intermediate', 'Advanced'];

  return (
    <div className="modal fade" id="createWorkoutModal" tabIndex="-1">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title col-10">Workout</h5>
            <button type="button" className="close col-2" data-dismiss="modal">
              <span>&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form className="workout-form">
              <Input inputId="program-name"
                labelTitle="Program Name"
                inputPlaceHolder="Starting Strength"
                handler={props.nameHandler} />
              <Dropdown
                dropdownId="program-level"
                labelTitle="Program Level"
                items={programLevels}
                handler={props.levelHandler} />
              <TextArea labelTitle="Author's Note"
                handler={props.descriptionHandler} />
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={props.submitHandler}>Create</button>
            <button type="button" className="btn btn-primary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  );
};

class ProgramFormModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      programName: '',
      programLevel: 'Beginner',
      programDescription: '',
      programAuthor: 'Aaron Lee',
    };

    this.newProgramHandler = this.newProgramHandler.bind(this);
    this.programNameHandler = this.programNameHandler.bind(this);
    this.programLevelHandler = this.programLevelHandler.bind(this);
    this.programDescriptionHandler = this.programDescriptionHandler.bind(this);
  }

  programNameHandler(event) {
    this.setState({ programName : event.target.value });
  }

  programLevelHandler(event) {
    this.setState({ programLevel : event.target.value });
  }

  programDescriptionHandler(event) {
    this.setState({ programDescription : event.target.value });
  }

  newProgramHandler() {
    let {programName, programLevel, programDescription, programAuthor} = this.state;

    let newProgram = {
      name: programName,
      level: programLevel,
      description: programDescription,
      author: programAuthor
    };

    this.props.submitHandler(newProgram);
  }

  render() {
    return (
        <div>
          <FormModal
            nameHandler={this.programNameHandler}
            levelHandler={this.programLevelHandler}
            descriptionHandler={this.programDescriptionHandler}
            submitHandler={this.newProgramHandler} />
          <button
            type="button"
            className="btn btn-primary"
            data-toggle="modal"
            data-target="#createWorkoutModal">
            {this.props.modalButtonLabel}
          </button>
        </div>
    );
  }
};

FormModal.propTypes = {
  nameHandler : PropTypes.func,
  levelHandler : PropTypes.func,
  descriptionHandler : PropTypes.func,
  submitHandler : PropTypes.func,
};

FormModal.defaultProps = {
  nameHandler : () => {console.log("NameInput: No event handler given")},
  levelHandler : () => {console.log("LevelDropdown: No event handler given")},
  descriptionHandler : () => {console.log("DescriptionTextArea: No event handler given")},
  submitHandler : () => {console.log("SubmitButton: No event handler given")},
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ newProgram }, dispatch);
}

function mapStateToProps(state) {
  return {
    program: state.program
  };
}

// const ProgramFormModalContainer = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(ProgramFormModal);

export default connect(mapStateToProps, mapDispatchToProps)(ProgramFormModal);
