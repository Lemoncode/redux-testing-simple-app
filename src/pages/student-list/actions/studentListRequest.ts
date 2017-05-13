import { StudentEntity } from '../../../model/student'
import { actionsEnums } from '../../../common/actionsEnums'
import { studentApi } from '../../../rest-api/student-api'

export const studentListRequestCompleted = (studentList : StudentEntity[]) => {
  return {
    type: actionsEnums.STUDENTS_GET_LIST_REQUEST_COMPLETED,
    payload: studentList    
  }    

}

export const studentListRequestStarted = () => {
  return function(dispatcher) {
    const promise = studentApi.loadStudentList();

    promise.then(
      (studentList) => {
        dispatcher(studentListRequestCompleted(studentList));
      }
    );

    return promise;
  }
}