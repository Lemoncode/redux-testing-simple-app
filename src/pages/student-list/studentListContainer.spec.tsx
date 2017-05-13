import { expect } from 'chai';
import { mount } from 'enzyme';
import * as React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { StudentListContainer } from './studentListContainer';
import { StudentEntity } from '../../model/student'
import * as studentListRequest from './actions/studentListRequest'
import { StudentListComponent } from './studentList'

const createStore = configureStore();

describe('StudentListContainer', () => {
  it('is defined', () => {
    expect(StudentListContainer).not.to.be.undefined;
  });

  it('Should connect with StudentListComponent - one student', () => {
    // Arrange
    const student = new StudentEntity();
    student.id = 2;
    student.fullname = 'John Doe';
    student.email = 'john@mail.com';    

    let mockStore = createStore({
        studentReducer: {
                          studentList: [student]
                        }
    });    

    const studentListRequestStartedStub = sinon.stub(studentListRequest, 'studentListRequestStarted');
    studentListRequestStartedStub.callsFake(() => ({type:'dummy'}));


    // Act
    let StudentListContainerWrapper = mount(
        <Provider store={mockStore as any }>
            <StudentListContainer/>
        </Provider>
    );

    // Assert
    var studentList = StudentListContainerWrapper.find(StudentListComponent);

    expect(studentList).not.to.be.undefined;
    expect(studentList.prop('studentList')).not.to.be.undefined;
    expect((studentList.prop('studentList') as any).length).equals(1);
    expect((studentList.prop('studentList')[0].fullname)).equals(student.fullname);
    expect(studentListRequestStartedStub.calledOnce).to.be.true;

    studentListRequestStartedStub.restore();
  });

  it('Should connect with StudentListComponent - one student', () => {
    // Arrange
    const studentA = new StudentEntity();
    studentA.id = 2;
    studentA.fullname = 'John Doe';
    studentA.email = 'john@mail.com';    

    const studentB = new StudentEntity();
    studentB.id = 3;
    studentB.fullname = 'Mary Wien';
    studentB.email = 'mary@mail.com';    


    let mockStore = createStore({
        studentReducer: {
                          studentList: [studentA, studentB]
                        }
    });    

    const studentListRequestStartedStub = sinon.stub(studentListRequest, 'studentListRequestStarted');
    studentListRequestStartedStub.callsFake(() => ({type:'dummy'}));


    // Act
    let StudentListContainerWrapper = mount(
        <Provider store={mockStore as any }>
            <StudentListContainer/>
        </Provider>
    );

    // Assert
    var studentList = StudentListContainerWrapper.find(StudentListComponent);

    expect(studentList).not.to.be.undefined;
    expect(studentList.prop('studentList')).not.to.be.undefined;
    expect((studentList.prop('studentList') as any).length).equals(2);
    expect((studentList.prop('studentList')[0].fullname)).equals(studentA.fullname);
    expect((studentList.prop('studentList')[1].fullname)).equals(studentB.fullname);
    expect(studentListRequestStartedStub.calledOnce).to.be.true;

    studentListRequestStartedStub.restore();
  });


});