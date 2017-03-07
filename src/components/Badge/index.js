import React from 'react'
import styled from 'styled-components'
import Base from '../Base'


const StyledBadge = styled(Base('div'))`
  border-radius: ${props => props.circle ? 99 : props.pill && 15}px
`

StyledBadge.defaultProps = {
  p: 1,
  m: 0,
  bgColor: 'primary',
  color: 'white',
  rounded: true
}

const Badge = ({...rest}) => (
  <StyledBadge {...rest} />
)

export default Badge
