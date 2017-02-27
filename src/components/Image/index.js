import React from 'react'
import styled from 'styled-components'
import Base from '../Base'

const StyledImage = styled(Base('img'))`
  borderRadius: ${props => props.circle ? 999 : null}px;
  height: auto;
  width: 100%;
  padding: ${props => props.theme.padding[1]}px;
`

const Image = ({...rest}) => (
  <StyledImage {...rest} />
)

export default Image
