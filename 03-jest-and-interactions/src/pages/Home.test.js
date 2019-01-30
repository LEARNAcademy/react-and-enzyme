import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

import Home from './Home'

it('has a Click Me button', ()=>{
  const home = mount(<Home />)
  expect(home.find('button#click_me').text()).toEqual('Click Me!')
})

it('displays congratulations when "Click Me" button is clicked', ()=>{
  const home = mount(<Home />)
  home.find('button#click_me').simulate('click')
  expect(home.find('#flash_message').text()).toEqual('Congratulations! You are the 1 millionth clicker of this button!')
})

it('captures input', ()=>{
  const home = mount(<Home />)
  home.find('#type_here').simulate('change', { target: { value: 'hello You!'}})
  expect(home.find('#input_value').text()).toEqual('hello You!')
})
