import React from 'react'
import styled from 'styled-components'
import Base from '../Base'


const NavItem = ({is, ...rest}) => {
  const Component = styled(Base(is)) `
    font-size: ${props => props.lg ? 1.3 : props.sm ? 0.9 : 1.2}rem;
    font-weight: ${props => props.strong ? 700 : 600};
    text-decoration: none;
    padding: ${props => props.p ? props.theme.padding[props.p] : 0}px
    line-height: 1.58;
  `
  return (
    <Component {...rest} />
  )
}

NavItem.propTypes = {
  is: React.PropTypes.string.isRequired,
  theme: React.PropTypes.object,
  p: React.PropTypes.number
}

NavItem.defaultProps = {
  is: 'a'
}

export default NavItem
