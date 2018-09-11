export const NEW_PROGRAM = 'new_program';
export const UPDATE_PROGRAM = 'new_program';

export function newProgram(program) {
  return {
    type: NEW_PROGRAM,
    payload: program
  }
}

export function updateProgramName(name) {

}
