import React from 'react'
import { shallow } from 'enzyme'
import Base from '../'
import theme from '../../../theme'

let Component = Base('div')

describe('<Base /> Component', () => {
  let wrapper
  let props = {
    theme: theme
  }

  beforeEach(() => {
    wrapper = shallow(<Component {...props} children='Hello' />)
  })
  it('Should render a button component', () => {
    expect(wrapper.contains('Hello')).toBe(true)
  })
})
