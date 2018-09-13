import React from 'react';

const Exercise = (props) => {
  return (
    <div className="list-group-item exercise-item">
      <input onChange={() => {}} value={props.exercise.name}
        className="program-mod-input" placeholder="Exercise Name" type="text"/>
    </div>
  )
}

export default Exercise;
