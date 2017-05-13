import * as React from "react";
import { connect } from 'react-redux';
import { StudentListComponent } from './studentList';
import { StudentEntity } from '../../model/student'
import { studentListRequestStarted } from './actions/studentListRequest'
import { navigateToEditStudentAction } from './actions/navigateToEditStudentAction'
import { IState } from '../../reducers'

const mapStateToProps = (state : IState) => {
    return {
      studentList : state.studentReducer.studentList
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getStudentList: () => dispatch(studentListRequestStarted()),
    editStudent: (id) => dispatch(navigateToEditStudentAction(id))
  }
}

export const StudentListContainer = connect(
                                   mapStateToProps
                                  ,mapDispatchToProps
                                )(StudentListComponent);
