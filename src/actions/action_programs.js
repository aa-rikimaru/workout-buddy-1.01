export const NEW_PROGRAM = 'new_program';
export const SAVE_PROGRAM = 'save_program';

export function newProgram(program) {
  return {
    type: NEW_PROGRAM,
    payload: program
  }
}

export function saveProgram() {
  console.log('Saving program...');
  return {
    type: SAVE_PROGRAM,
    payload: { name: '5/3/1'}
  }
}
