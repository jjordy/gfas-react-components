import React, { Component, PropTypes } from 'react'
import className from 'classnames'
import Base from '../Base'
import styled from 'styled-components'
import Flex from '../Flex'

const ItemBody = styled(Base('div')) `
  border: ${props => props.theme.borderWidth}px solid ${props => props.theme.colors.lightgray}
`

export default class AccordionItemBody extends Component {

  render () {
    var style = {
      maxHeight: this.props.maxHeight,
      overflow: this.props.overflow,
      transition: `max-height ${this.props.duration}ms ease`
    }

    return (
      <ItemBody aria-labelledby={`react-safona-item-title-${this.props.uuid}`}
        className={className('react-sanfona-item-body', this.props.className)}
        id={`react-safona-item-body-${this.props.uuid}`}
        style={style}>
        <Flex p={1} className='react-sanfona-item-body-wrapper'>
          {this.props.children}
        </Flex>
      </ItemBody>
    )
  }

}

AccordionItemBody.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  maxHeight: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  duration: PropTypes.number,
  overflow: PropTypes.string,
  uuid: PropTypes.string
}
