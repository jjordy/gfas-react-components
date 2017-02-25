import React from 'react'
import { shallow } from 'enzyme'
import Button from '../'
import theme from '../../../theme'

describe('<Button /> Component', () => {
  let wrapper
  let props = {
      theme: theme
  }
  beforeEach(() => {
    wrapper = shallow(<Button children='Hello' lg {...props} />)
  })
  it('Should render a button component', () => {
    expect(wrapper.contains('Hello')).toBe(true)
  })
})
