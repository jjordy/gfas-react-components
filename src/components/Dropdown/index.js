import React from 'react'
import styled from 'styled-components'
import Base from '../Base'
import Flex from '../Flex'
import Button from '../Button'
import Fixed from '../Fixed'
import Space from '../Space'
import Glyph from '../Glyph'

const DropdownContainer = styled(Base('div'))`
  position: relative;
  z-index: 1001;
`

const StyledDropdown = styled(Base('div'))`
  background-color: #FFF;
  position: absolute;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  width: 100%;
`

export default class Dropdown extends React.Component {
  constructor (props) {
    super(props)
    this.toggleOpen = this.toggleOpen.bind(this)
    this.close = this.close.bind(this)
    this.state = { open: false }
  }

  toggleOpen () {
    this.setState({open: !this.state.open})
  }

  close () {
    this.setState({open: false})
  }

  render () {
    const { children, title, ...rest } = this.props
    const { open } = this.state
    return (
      <div>
        <DropdownContainer {...rest}>
          <Flex>
            <Button
              bgColor='transparent'
              onClick={this.toggleOpen}>
              <Flex align='center'>
                {title}
                <Space />
                <Glyph xs icon='chevron-down' fixed />
              </Flex>
            </Button>
          </Flex>
          {open && <StyledDropdown>
            <Flex column p={1}>
              {children}
            </Flex>
          </StyledDropdown>}
        </DropdownContainer>
        {open &&
          <Fixed
            top
            left
            right
            bottom
            style={{
              width: '100%',
              height: '100vh',
              zIndex: 1000
            }}
            onClick={this.close}/>}
      </div>
    )
  }
}

Dropdown.propTypes = {
  children: React.PropTypes.node.isRequired,
  title: React.PropTypes.string.isRequired
}
