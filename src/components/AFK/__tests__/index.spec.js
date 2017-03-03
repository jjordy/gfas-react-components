import React from 'react'
import Afk from '../'
import { shallow } from 'enzyme'

describe('(Component) <Afk />', function () {
  let _props
  let _wrapper

  beforeEach(() => {
    _props = {
      timeout: 200,
      onTimeout: jest.fn(),
      onToggle: jest.fn()
    }
    _wrapper = shallow(<Afk {..._props} />)
  })

  it('Should render <Afk /> container.', () => {
    expect(_wrapper.find('.afk-container')).toHaveLength(1)
  })

  it('Should show modal when timer is up and no movement has occured', () => {
    expect(_wrapper.find('Modal').props().open).toBeFalse
    _wrapper.setState({isAfk: true})
    expect(_wrapper.find('Modal').props().open).toBeTrue
    expect(_wrapper.find('Modal').props().title).toEqual('It Seems your away')
  })

  it('Should clear the afk state when the im not away button is clicked', () => {
    expect(_wrapper.find('Modal').props().open).toBeFalse
    _wrapper.setState({isAfk: true})
    expect(_wrapper.find('Modal').props().open).toBeTrue
    _wrapper.find('Button').simulate('click')
    expect(_wrapper.state().isAfk).toBeFalse
    expect(_wrapper.find('Modal').props().open).toBeFalse
  })
})

