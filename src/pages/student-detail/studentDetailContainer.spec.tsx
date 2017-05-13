import { mount } from 'enzyme';
import * as React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { StudentDetailContainer } from './studentDetailContainer';
import { StudentDetailComponent } from './studentDetail';
import { StudentEntity } from '../../model/student'
import { StudentState } from '../../reducers/student'

const createStore = configureStore();

describe('StudentDetailContainer', () => {
  it('is defined', () => {
    expect(StudentDetailContainer).not.to.be.undefined;
  });

  it('Should connect with StudentDetail component', () => {
    // Arrange     
    const student = new StudentEntity();
    student.id = 2;
    student.fullname = 'John Doe';
    student.email = 'john@mail.com';

    let mockStore = createStore({
      studentReducer: {
        studentList: [],
        editingStudent: student,
      } as StudentState
    });


    // Act
    const studentDetailContainerWrapper = mount(
      <Provider store={mockStore as any}>
        <StudentDetailContainer />
      </Provider>
    );

    // Stateless no string literal, function
    const studentDetail = studentDetailContainerWrapper.find(StudentDetailComponent);
    
    // Assert    
    expect(studentDetail).not.to.be.undefined;
    expect(studentDetail.prop('student')).not.to.be.undefined;
  })
});

