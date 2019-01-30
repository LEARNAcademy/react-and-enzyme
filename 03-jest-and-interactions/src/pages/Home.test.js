import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

import Home from './Home'


it('has a Don\'t Click Me button', ()=> {
  const home=mount(<Home />)
  expect(home.find('button#dont_click_me').text()).toEqual("Don't Click Me!")
})

it('displays message when don\'t click me button is clicked', ()=> {
  const home=mount(<Home />)
  home.find('button#dont_click_me').simulate('click')
  expect(home.find('#flash_message').text()).toEqual('We knew you would')
})
