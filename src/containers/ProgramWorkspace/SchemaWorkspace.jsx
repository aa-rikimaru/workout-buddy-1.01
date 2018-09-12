import React, { Component } from 'react';

class SchemaWorkspace extends Component {
  renderSchema(exercise) {
    return (
      <p key={exercise.name} >{exercise.name}</p>
    )
  }

  render() {
    return (
      <div id="schema-workspace">
        {this.props.schema.map(this.renderSchema)}
      </div>
    )
  }
}

export default SchemaWorkspace;
