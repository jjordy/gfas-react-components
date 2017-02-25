import React from 'react'
import { shallow } from 'enzyme'
import Dropdown from '../'

describe('<Dropdown /> Component', () => {
  let wrapper
  let props = {
    title: 'Test'
  }

  beforeEach(() => {
    wrapper = shallow(<Dropdown {...props}><p>Hello</p></Dropdown>)
  })

  it('Should render a Title', () => {
    expect(wrapper.contains('Test')).toBe(true)
  })

  it('Should show dropdown when button is clicked', () => {
    wrapper.find('Button').simulate('click')
    expect(wrapper.contains('Hello')).toBe(true)
  })

  it('Should include full width fixed element to allow off click', () => {
    wrapper.find('Button').simulate('click')
    expect(wrapper.find('Fixed')).toHaveLength(1)
    expect(wrapper.find('Fixed').props().style)
      .toEqual({width: '100%', height: '100vh', zIndex: 1000})
  })

  it('Fixed Layer should close dropdown on click', () => {
    wrapper.find('Button').simulate('click')
    expect(wrapper.contains('Hello')).toBe(true)
    wrapper.find('Fixed').simulate('click')
    expect(wrapper.find('Fixed')).toHaveLength(0)
    expect(wrapper.contains('Hello')).toBe(false)
  })
})
