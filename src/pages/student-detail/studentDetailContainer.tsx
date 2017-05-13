import * as React from 'react';
import { connect } from 'react-redux';
import { StudentDetailComponent } from './studentDetail';
import { StudentEntity } from '../../model/student'
import { studentApi } from '../../rest-api/student-api'
import { IState } from '../../reducers/index'

const mapStateToProps = (state : IState) => {
    return {
      student: state.studentReducer.editingStudent,
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateStudentFromUI: (field : string, value : string) => {},
    save : () => {}
  }
}

export const StudentDetailContainer = connect(
                                   mapStateToProps
                                  ,mapDispatchToProps
                                )(StudentDetailComponent);


/*
interface State {
  student: StudentEntity;
}

export class StudentDetailContainer extends React.Component<{}, State> {

  constructor() {
    super();

    this.state = {
      student:
      {
        id: 2,
        email: 'pepe@pepe.com',
        fullname: 'pepe', 
        gotActiveTraining: true
      }
    };
  }

  updateStudentFromUI(fieldName : string, value : string) {    

    this.setState({
      student: {
        ...this.state.student, 
        [fieldName]: value
      }
    });
  }

  save() {    
    studentApi.saveStudent(this.state.student);
  }

  render() {
    return (
      <StudentDetailComponent 
        student={this.state.student} 
        updateStudentFromUI={this.updateStudentFromUI.bind(this)}
        save={this.save.bind(this)}
      />
    )
  }
}
*/


