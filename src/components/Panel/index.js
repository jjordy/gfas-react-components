import styled from 'styled-components'
import Base from '../Base'
import { animations } from '../../theme'
export const Panel = styled(Base('div'))`
  display: flex
  border-radius: ${props => props.theme.borderRadius}px;
  flex: 1 1 auto;
  background-color: #FFF;
  flex-direction: column;
  border: ${props => props.theme.borderWidth}px solid ${props => props.theme.colors.gray}
  animation: 1s ${animations.fadeIn} ease-out;
`

export const PanelHeader = styled(Base('div'))`
  font-weight: 800;
  color: ${props => props.bgColor ? '#FFF' : 'inherit'}
  padding: ${props => props.p ? props.theme.padding[props.p] : props.theme.padding[2]}px
  borderBottom: ${props => props.bgColor ? null : `${props.theme.borderWidth}px solid ${props.theme.colors.gray}`}
`

