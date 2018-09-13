import React, { Component } from 'react';

import Exercise from './Exercise.jsx';
import './css/ProgramWorkspace.css';

class SchemaWorkspace extends Component {
constructor(props) {
  super(props);

  this.state = {
    exerciseName: '',
    exercises: []
  };

  this.handleExerciseNameChange = this.handleExerciseNameChange.bind(this);
  this.handleNewExercise = this.handleNewExercise.bind(this);
}

  renderSchema(exercise) {
    return (
      <Exercise
        key = {exercise.name}
        exercise={exercise}
      />
    )
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
      exercises: [newExercise, ...this.state.exercises],
      exerciseName: ''
    });
  }

  render() {
    return (
      <div className="row">
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
          <div id="schema-workspace">
            {this.state.exercises.map(this.renderSchema)}
          </div>

        </div>
      </div>

    )
  }
}

export default SchemaWorkspace;
