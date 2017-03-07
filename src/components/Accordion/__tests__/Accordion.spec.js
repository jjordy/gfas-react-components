import React from 'react'
import Accordion from '../Accordion'
import AccordionItem from '../AccordionItem'
import { shallow } from 'enzyme'

describe('(Component) <Accordion />', function () {
  let _props
  let _wrapper

  beforeEach(() => {
    _props = {
      onChange: jest.fn()
    }
    _wrapper = shallow(<Accordion {..._props} />)
  })

  it('Should render its container', () => {
    expect(_wrapper.find('.react-sanfona')).toHaveLength(1)
  })

  it('Should call onChange prop if it exist', () => {
    expect(_props.onChange).not.toHaveBeenCalled()
    _wrapper.instance().handleClick(0)
    expect(_props.onChange).toHaveBeenCalled()
  })

  describe('activeItems', () => {
    it('Should select the first item as default', () => {
      let _wrapper = shallow(
        <Accordion>
          <AccordionItem title='Test1' />
          <AccordionItem title='Test2' />
        </Accordion>)
      let children = _wrapper.find('.react-sanfona').children()
      expect(children).toHaveLength(2)
      expect(_wrapper.find('.react-sanfona').childAt(0).props().expanded).toBe(true)
      expect(_wrapper.find('.react-sanfona').childAt(1).props().expanded).toBe(false)
    })

    it('Should accept activeItems prop', () => {
      let _wrapper = shallow(
        <Accordion activeItems={1}>
          <AccordionItem title='Test1' />
          <AccordionItem title='Test2' />
        </Accordion>)
      expect(_wrapper.find('.react-sanfona').childAt(0).props().expanded).toBe(false)
      expect(_wrapper.find('.react-sanfona').childAt(1).props().expanded).toBe(true)
    })

    it('Should accept a string as activeItems prop', () => {
      let _wrapper = shallow(
        <Accordion activeItems='second'>
          <AccordionItem title='Test1' slug='first' />
          <AccordionItem title='Test2' slug='second' />
        </Accordion>)
      expect(_wrapper.find('.react-sanfona').childAt(0).props().expanded).toBe(false)
      expect(_wrapper.find('.react-sanfona').childAt(1).props().expanded).toBe(true)
    })

    it('Should only keep one activeItem when allowMultiple is false', () => {
      let _wrapper = shallow(
        <Accordion activeItems={1}>
          <AccordionItem title='Test1' />
          <AccordionItem title='Test2' />
        </Accordion>)
      expect(_wrapper.state().activeItems).toEqual([1])
      _wrapper.instance().handleClick(0)
      expect(_wrapper.state().activeItems).toEqual([0])
    })
  })

  describe('allowMultiple', () => {
    it('should allow multiple expanded items', () => {
      let _wrapper = shallow(
        <Accordion activeItems={1} allowMultiple>
          <AccordionItem title='Test1' />
          <AccordionItem title='Test2' />
        </Accordion>)
      expect(_wrapper.state().activeItems).toEqual([1])
      _wrapper.instance().handleClick(0)
      _wrapper.update()
      expect(_wrapper.find('.react-sanfona').childAt(0).props().expanded).toEqual(true)
      expect(_wrapper.find('.react-sanfona').childAt(1).props().expanded).toEqual(true)
      expect(_wrapper.state().activeItems).toEqual([1, 0])
    })

    it('Should default to first item if allowMultiple is false', () => {
      let _wrapper = shallow(
        <Accordion activeItems={[0, 1]}>
          <AccordionItem title='Test1' />
          <AccordionItem title='Test2' />
        </Accordion>)
      expect(_wrapper.find('.react-sanfona').childAt(0).props().expanded).toEqual(true)
      expect(_wrapper.find('.react-sanfona').childAt(1).props().expanded).toEqual(false)
    })

    it('Should allow multiple selected indexs of different types', () => {
      let _wrapper = shallow(
        <Accordion activeItems={[0, 'second']} allowMultiple>
          <AccordionItem title='Test1' />
          <AccordionItem title='Test2' slug='second' />
        </Accordion>)
      const accordion = _wrapper.find('.react-sanfona')
      expect(accordion.childAt(0).props().expanded).toBe(true)
      expect(accordion.childAt(1).props().expanded).toBe(true)
    })

    it('Should save activeItems on statewhen allowMultiple is true', () => {
      let _wrapper = shallow(
        <Accordion activeItems={1} allowMultiple>
          <AccordionItem title='Test1' />
          <AccordionItem title='Test2' />
        </Accordion>)

      expect(_wrapper.state().activeItems).toEqual([1])
    })

    it('should update activeItems state when clicking on an item', () => {
      let _wrapper = shallow(
        <Accordion activeItems={1} allowMultiple>
          <AccordionItem title='Test1' />
          <AccordionItem title='Test2' />
        </Accordion>)

      expect(_wrapper.state().activeItems).toEqual([1])
      _wrapper.instance().handleClick(0)
      expect(_wrapper.state().activeItems).toEqual([1, 0])
    })
  })

  describe('openNextAccordionItem', () => {
    it('Should open next accordion item', () => {
      let _wrapper = shallow(
        <Accordion openNextAccordionItem>
          <AccordionItem title='Test1' />
          <AccordionItem title='Test2' />
        </Accordion>)
      const accordion = _wrapper.find('.react-sanfona')
      expect(accordion.childAt(0).props().expanded).toBe(true)
      expect(accordion.childAt(1).props().expanded).toBe(false)
      _wrapper.instance().handleClick(0)
      _wrapper.update()
      const newAccordion = _wrapper.find('.react-sanfona')
      expect(newAccordion.childAt(0).props().expanded).toBe(false)
      expect(newAccordion.childAt(1).props().expanded).toBe(true)
    })

    it('Should close last item and not open another accordion item', () => {
      let _wrapper = shallow(
        <Accordion openNextAccordionItem activeItems={[1]}>
          <AccordionItem title='Test1' />
          <AccordionItem title='Test2' />
        </Accordion>)

      const accordion = _wrapper.find('.react-sanfona')
      expect(accordion.childAt(0).props().expanded).toBe(false)
      expect(accordion.childAt(1).props().expanded).toBe(true)

      _wrapper.instance().handleClick(1)
      _wrapper.update()
      const newAccordion = _wrapper.find('.react-sanfona')
      expect(newAccordion.childAt(0).props().expanded).toBe(false)
      expect(newAccordion.childAt(1).props().expanded).toBe(false)
    })

    it('Should allowMultiple if present', () => {
      let _wrapper = shallow(
        <Accordion openNextAccordionItem allowMultiple>
          <AccordionItem title='Test1' />
          <AccordionItem title='Test2' />
          <AccordionItem title='Test2' />
        </Accordion>)
      const accordion = _wrapper.find('.react-sanfona')
      expect(accordion.childAt(0).props().expanded).toBe(true)
      expect(accordion.childAt(1).props().expanded).toBe(false)
      expect(accordion.childAt(2).props().expanded).toBe(false)
      _wrapper.instance().handleClick(1)
      _wrapper.instance().handleClick(2)
      _wrapper.update()
      const newAccordion = _wrapper.find('.react-sanfona')
      expect(newAccordion.childAt(0).props().expanded).toBe(true)
      expect(newAccordion.childAt(1).props().expanded).toBe(true)
      expect(newAccordion.childAt(2).props().expanded).toBe(true)
    })

    it('Should override slug property and assign key to index', () => {
      let _wrapper = shallow(
        <Accordion openNextAccordionItem>
          <AccordionItem title='Test1' slug='first' />
          <AccordionItem title='Test2' slug='second' />
        </Accordion>)
      _wrapper.instance().handleClick(0)
      _wrapper.update()
      const accordion = _wrapper.find('.react-sanfona')
      expect(accordion.childAt(0).props().expanded).toBe(false)
      expect(accordion.childAt(1).props().expanded).toBe(true)
    })
  })
})
