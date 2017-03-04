import React, { Component, PropTypes } from 'react'
import className from 'classnames'
import styled from 'styled-components'
import Base from '../Base'
import Heading from '../Heading'
import Flex from '../Flex'
import Space from '../Space'
import Glyph from '../Glyph'

const ItemTitle = styled(Base('div'))`
  border: 1px solid #e7e7e7;
`

export default class AccordionItemTitle extends Component {

  render () {
    return (
      <ItemTitle
        aria-controls={`react-sanfona-item-body-${this.props.uuid}`}
        className={className('react-sanfona-item-title', this.props.className)}
        id={`react-safona-item-title-${this.props.uuid}`}
        onClick={this.props.onClick}
        style={{cursor: 'pointer'}}>
        <Flex justify='space-between' align='center'>
          <Heading level={4} p={1} strong>{this.props.title}</Heading>
          <Heading level={5} p={1} strong>{this.props.subTitle}</Heading>
          <Space auto />
          <Glyph p={2} xs icon='chevron-down' />
        </Flex>
      </ItemTitle>
    )
  }

}

AccordionItemTitle.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  title: PropTypes.node,
  uuid: PropTypes.string,
  titleColor: PropTypes.string,
  subTitle: PropTypes.string
}
