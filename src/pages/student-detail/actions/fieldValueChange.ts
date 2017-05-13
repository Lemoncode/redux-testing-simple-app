import { actionsEnums } from '../../../common/actionsEnums'


export const fieldValueChangeAction = (name, value) =>  ({
  type: actionsEnums.STUDENT_FIELD_VALUE_CHANGED,
  payload: {
    name,
    value,
  }
})