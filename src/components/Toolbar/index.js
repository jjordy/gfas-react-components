import React from 'react'
import styled from 'styled-components'
import Base from '../Base'

const StyledToolbar = styled(Base('nav'))`
  display: flex;
  height: 50px;
  padding: ${props => props.theme.padding[1]}px
`

const Toolbar = ({...rest}) => (
  <StyledToolbar {...rest}/>
)

export default Toolbar
