import { actionsEnums } from '../common/actionsEnums'
import { StudentEntity } from '../model/student'


export class StudentState {
  studentList : ReadonlyArray<StudentEntity>;
  editingStudent : StudentEntity;

  public constructor() {
    this.studentList = [];
    this.editingStudent = new StudentEntity();
  }
}

export const studentReducer = (state = new StudentState(), action) => {
  switch(action.type) {
    case actionsEnums.STUDENTS_GET_LIST_REQUEST_COMPLETED:
      return handleGetStudentListRequestCompleted(state, action.payload);
    case actionsEnums.STUDENT_FIELD_VALUE_CHANGED: 
      return handleStudentFieldValueChanged(state, action.payload);
  }
  return state;
}

const handleStudentFieldValueChanged = (state :StudentState, 
                                        {name, value}) : StudentState => {
  return {
    ...state,
    editingStudent: {
      ...state.editingStudent,
      [name]: value
    }
  }
}

const handleGetStudentListRequestCompleted = (state : StudentState, 
                                                payload : StudentEntity[]) => {
    return {
      ...state,
      studentList: payload
    }
}