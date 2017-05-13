import { mount } from 'enzyme';
import * as React from 'react';
import { Input } from './input'

describe('common/Input component', () => {
  it('Should trigger OnChange and propagate property', () => {

    const myOnChange = sinon.spy();
    
    const properties = {
      name : 'myId', 
      label : 'My label',
      placeholder : 'My PlaceHolder',
      value : '',
      onChange : myOnChange
    }

    const inputWrapper = mount(
        <Input {...properties}/>
    );

    const innerInput = inputWrapper.find('input');

    innerInput.simulate('change');

    expect(myOnChange.calledOnce).to.be.true;
    expect(myOnChange.calledWith('myId', '')).to.be.true;
  });
});