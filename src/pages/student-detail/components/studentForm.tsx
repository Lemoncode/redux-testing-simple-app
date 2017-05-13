import * as React from 'react';
import { Input, Button } from '../../../common/components'
import { StudentEntity } from '../../../model/student'


interface Props {
  student : StudentEntity
  updateStudentFromUI : (fieldName :string , value : string) => void 
  save : () => void;
}

export const StudentForm = (props : Props) => {

return (
  <form>
    <h1> Customer Form</h1>

    <Input
      label="Name:"
      name="fullname"
      placeholder="Enter your name"
      value={props.student.fullname}
      onChange={props.updateStudentFromUI}
    />

    <Input
      label="Email:"
      name="email"
      placeholder="Enter your email"
      value={props.student.email}
      onChange={props.updateStudentFromUI}
    />

    <Button      
      label="Save"
      onClick={props.save}
    >
    </Button>
  </form>
);
};

/*
<form>
  <campo nombre/>
  <campo email/>
  <boton de salvar />
</form>
*/