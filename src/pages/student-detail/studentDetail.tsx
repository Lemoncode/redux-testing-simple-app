import * as React from 'react';
import { StudentForm } from './components/studentForm'
import { StudentEntity } from '../../model/student'


interface Props {
  student : StudentEntity
  updateStudentFromUI : (fieldName :string , value : string) => void 
  save : () => void;
}

export const StudentDetailComponent = (props : Props) => {


  return (
    <StudentForm 
      student={props.student}
      updateStudentFromUI={props.updateStudentFromUI}
      save={props.save}
      />
  )
}
