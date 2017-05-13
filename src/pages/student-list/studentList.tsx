import * as React from 'react';
import { StudentTableComponent } from './components/studentTable'
import { StudentEntity } from '../../model/student' 
import { history } from '../../history'

interface Props {
  studentList : StudentEntity[];
  getStudentList : () => void;  
  editStudent: (id : number) => void;
}


export class StudentListComponent extends React.Component<Props,{}> {
  
  componentDidMount() {
    this.props.getStudentList();
  }
  
  render() {
      return (
        <StudentTableComponent 
          studentList={this.props.studentList}
          editStudent={this.props.editStudent}
          />
      )
  }  

}
