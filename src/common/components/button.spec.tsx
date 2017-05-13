import { mount } from 'enzyme';
import * as React from 'react';
import { Button } from './button'

describe('common/button', () => {
  it('OnClick is triggered when clicking on the button', () => {
    const myOnClick = sinon.spy();

    const properties = {
      label : 'my label',
      onClick : myOnClick        
    }

    const buttonWrapper = mount (
        <Button {...properties}/>
    )


    const innerButton = buttonWrapper.find('button');

    innerButton.simulate('click');

    expect(myOnClick.calledOnce).to.be.true;    
  })
})