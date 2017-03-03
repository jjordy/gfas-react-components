import React from 'react'
import styled from 'styled-components'
import Base from '../Base'

const Heading = ({level, big, ...rest}) => {
  const Component = styled(Base(`h${level}`))`
    font-weight: ${props => props.strong ? 600 : 400};
    font-size: ${props => big ? props.theme.sizes[level - 1] * 2 : props.theme.sizes[level - 1]}px;` // eslint-disable-line
  return (
    <Component {...rest} />
  )
}

Heading.propTypes = {
  big: React.PropTypes.bool,
  level: React.PropTypes.number.isRequired
}

Heading.defaultProps = {
  level: 1,
  mb: 0,
  mt: 0
}

export default Heading
