import { studentReducer, StudentState } from './student'
import { actionsEnums } from '../common/actionsEnums'
import { StudentEntity } from '../model/student'
import * as deepFreeze from 'deep-freeze'


describe('studentReducer', () => {
  it('is student reducer defined', () => {
    expect(studentReducer).not.to.be.undefined;
  });

  it('returns default state when not defined action', () => {    
    // Arrange
    const state : StudentState = {studentList: [], 
                                  editingStudent: new StudentEntity(),
                                 };
    const action = {
        type: 'strangeActionNotHandleByTheReducer'
    };

    // Act
    const newState = studentReducer(state, action);

    // Assert
    expect(state).to.be.equals(newState);
  }) ;

  describe('handleGetStudentList', () => {
    it('updates the state when getStudentListAction is passed', () => {
      const state : StudentState = {studentList: [],
                                    editingStudent: new StudentEntity(),
                                  };

      deepFreeze(state);

       const students : StudentEntity[] = [
        {
          id: 1,
          gotActiveTraining: true,
          fullname: 'pepe',
          email: 'myEmail@email.com'                    
        },
        {
          id: 2,
          gotActiveTraining: false,
          fullname: 'manuel',
          email: 'otroEmail@email.com'                    
        }
      ];


      const action = {
         type: actionsEnums.STUDENTS_GET_LIST_REQUEST_COMPLETED,
         payload: students
      };

      const newState = studentReducer(state, action);

      expect(newState.studentList).not.to.be.undefined;
      expect(newState.studentList.length).to.be.equals(2);
      expect(newState.studentList[0].id).to.be.equals(1);
    });
  });

  describe('handleGetFieldValueChanged', () => { 
    it('updates the state when FieldValueChanged is passed', () => {
      const state : StudentState = {studentList: [],
                                    editingStudent: new StudentEntity(),
                                  };
      deepFreeze(state);

      const action = {
         type: actionsEnums.STUDENT_FIELD_VALUE_CHANGED,
         payload: {
                    name: 'email', 
                    value: 'newemail@mail.com'
                  }
      };

      const newState = studentReducer(state, action);

      expect(newState.editingStudent).not.to.be.undefined;
      expect(newState.editingStudent.fullname).to.be.equals('');
      expect(newState.editingStudent.email).to.be.equals(action.payload.value);
    });
  });
});