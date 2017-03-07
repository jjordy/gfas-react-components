import React from 'react'
import AccordionItem from '../AccordionItem'
import { shallow } from 'enzyme'

describe('(Component) <AccordionHeading />', function () {
  let _props
  let _wrapper

  beforeEach(() => {
    _props = {
    }
    _wrapper = shallow(<AccordionItem {..._props} />)
  })

  it('Should render its container', () => {
    expect(_wrapper.find('.react-sanfona-item')).toHaveLength(1)
  })

  it('Should have a unique id', () => {
    const anotherWrapper = shallow(<AccordionItem {..._props} />)

    expect(_wrapper.instance().uuid).not.toEqual(anotherWrapper.instance().uuid)
  })

  describe('ARIA', () => {
    it('Should set aria-expanded to true when expanded prop is true', () => {
      let wrapper = shallow(<AccordionItem expanded />)
      expect(wrapper.find('.react-sanfona-item').props()['aria-expanded']).toBeTruthy()
      expect(wrapper.find('.react-sanfona-item').props()['aria-hidden']).toBeUndefined()
    })

    it('Should set aria-hidden to true when expanded is not true', () => {
      expect(_wrapper.props()['aria-expanded']).toBeUndefined()
      expect(_wrapper.props()['aria-hidden']).toBeTruthy()
    })
  })
})
