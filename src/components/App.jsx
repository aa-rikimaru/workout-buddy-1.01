import React, { Component } from 'react';
import ProgramWorkspace from '../containers/ProgramWorkspace/ProgramWorkspace.jsx';
import SchemaWorkspace from '../containers/ProgramWorkspace/SchemaWorkspace.jsx';

class App extends Component {
  render() {
    return (
      <div className="container-fluid app">
        <ProgramWorkspace />
        <SchemaWorkspace />
      </div>
    );
  }
}

export default App;
