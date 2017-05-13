import { fieldValueChangeAction } from './fieldValueChange'
import { actionsEnums } from '../../../common/actionsEnums'

describe('fieldValueChange action', () => {
  it('is informed with the right values', () => {
    const result= fieldValueChangeAction('email', 'john@email.com');

    expect(result.type).to.be.equals(actionsEnums.STUDENT_FIELD_VALUE_CHANGED);
    expect(result.payload).not.to.be.undefined;
    expect(result.payload.name).to.be.equals('email');
    expect(result.payload.value).to.be.equals('john@email.com');
  })
});