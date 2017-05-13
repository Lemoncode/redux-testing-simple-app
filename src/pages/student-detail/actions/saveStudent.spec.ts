import configureMockStore from 'redux-mock-store'
import ReduxThunk from 'redux-thunk'
import { saveStudentAction } from './saveStudent'
import { studentApi } from '../../../rest-api/student-api'
import { StudentEntity } from '../../../model/student'

const mockStore = configureMockStore([ ReduxThunk]);

describe('saveStudentAction', () => {
  it('is defined', () => {
    expect(saveStudentAction).not.to.be.undefined;
  });

  it('calls rest api saveStudent', () => {
      // Arrange
      const studentApiStub = sinon.stub(studentApi, 'saveStudent');

      // Act
      const store = mockStore([]);    

      const student = new StudentEntity();      

      student.id = 3;

      store.dispatch(saveStudentAction(student));

      // Assert
      expect(studentApiStub.calledOnce).to.be.true; 
      expect(studentApiStub.calledWith(student)).to.be.true;
      
      studentApiStub.restore();
  })

});

