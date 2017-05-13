import { history } from '../../../history'


export const navigateToEditStudentAction = (studentId: number) => (dispatcher) => 
  history.push(`/student-detail/${studentId}`)  ;    


