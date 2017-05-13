import { navigateToEditStudentAction } from './navigateToEditStudentAction'
import { history } from '../../../history'
import configureMockStore from 'redux-mock-store'
import ReduxThunk from 'redux-thunk'

const mockStore = configureMockStore([ ReduxThunk]);

describe('navigateToEditStudent', () => {
  it('is defined', () => {
    expect(navigateToEditStudentAction).not.to.be.undefined;
  });

  it('call history.push', () => {    
    // Arrange
    const pushStub =  sinon.stub(history, 'push');

    // Act
    const store = mockStore([]);    
    const studentId = 2;

    store.dispatch(navigateToEditStudentAction(studentId));
    // Assert
    expect(pushStub.calledOnce).to.be.true; 
    expect(pushStub.calledWith(`/student-detail/${studentId}`)).to.be.true;

    pushStub.restore();
  })
});




