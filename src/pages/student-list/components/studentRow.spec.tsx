import { expect } from 'chai';
import { shallow } from 'enzyme';
import * as React from 'react';
import { StudentEntity } from '../../../model/student'
import { StudentRowComponent } from './studentRow';

describe('StudentRowComponent', () => {
  it('Should render a row with a given name and email', () => {
    // Arrange
    const student = new StudentEntity();    
    student.id = 2;
    student.gotActiveTraining = true;
    student.fullname = 'John Doe';
    student.email = "john@mail.com";

    // Act
    const studentRowWrapper = shallow(
        <StudentRowComponent 
          student={student}
          editStudent={() =>{}}
          />
    );

    // Assert
    expect(studentRowWrapper.type()).to.be.equals('tr');
    expect(studentRowWrapper.childAt(0).type()).to.be.equals('td');
    expect(studentRowWrapper.childAt(1).children().at(0).html()).to.be.equals('<span>John Doe</span>');
     expect(studentRowWrapper.children().at(2).type()).to.be.equals('td');
     expect(studentRowWrapper.children().at(2).children().at(0).html()).to.be.equals('<span>john@mail.com</span>');    
  });
});