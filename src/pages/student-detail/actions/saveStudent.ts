import { StudentEntity} from '../../../model/student'
import { studentApi } from '../../../rest-api/student-api'


export const saveStudentAction = 
  (studentEntity : StudentEntity) => (dispatch) => {
     studentApi.saveStudent(studentEntity);   
}