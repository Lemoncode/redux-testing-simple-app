import { studentListRequestStarted, studentListRequestCompleted } from './studentListRequest'
import { StudentEntity } from '../../../model/student'
import { actionsEnums } from '../../../common/actionsEnums'
import { studentApi } from '../../../rest-api/student-api'
import configureMockStore from 'redux-mock-store'
import ReduxThunk from 'redux-thunk'

const mockStore = configureMockStore([ ReduxThunk]);

describe('studentListRequestCompleted', () => {
  it('is defined', () => {
    expect(studentListRequestCompleted).not.to.be.undefined;
  })

  it(`informing a student list should 
        return an object with field type and students`, () => {

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

       const result = studentListRequestCompleted(students);

       expect(result.type).to.be.equals(actionsEnums.STUDENTS_GET_LIST_REQUEST_COMPLETED);
       expect(result.payload).to.be.equals(students);
    }
  )
});

describe('studentListRequestStarted', () => {
  it('is defined', () => {
    expect(studentListRequestStarted).not.to.be.undefined;
  });

  it('student List request successfully completed', (done) => {
    // Arrange
    const expectedStudentList =  [
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

    const getStudentListMethodStub = sinon.stub(studentApi, 'loadStudentList');

    getStudentListMethodStub.callsFake(() => ({
      then: callback => {
        callback(expectedStudentList)
      }
    }));

    // Act
    const store = mockStore([]);

    store.dispatch(studentListRequestStarted())
      .then(() => {
        // Assert
        expect(store.getActions()[0].type).to.be.equal(actionsEnums.STUDENTS_GET_LIST_REQUEST_COMPLETED);
        expect(store.getActions()[0].payload.length).to.be.equal(2);
        expect(getStudentListMethodStub.calledOnce).to.be.true;

        getStudentListMethodStub.restore();

        done();
      })    
  });
});