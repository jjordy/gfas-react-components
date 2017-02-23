import styled from 'styled-components'
import { animations } from '../../theme'
import Base from '../Base'

const FadeInButton = styled(Base('button'))`
    padding-left: ${props => props.lg ? props.theme.padding[3] : props.theme.padding[2]}px
    padding-right: ${props => props.lg ? props.theme.padding[3] : props.theme.padding[2]}px
    padding-top: ${props => props.lg ? props.theme.padding[2] : props.theme.padding[1]}px
    padding-bottom: ${props => props.lg ? props.theme.padding[2] : props.theme.padding[1]}px
    font-size: ${props => props.lg ? props.theme.sizes[3] : props.theme.sizes[4]}px
    font-weight: 600;
    color: ${props => props.color ? props.theme.colors[props.color] : props.theme.colors.white}
    background-color: ${props => props.bgColor ? props.theme.colors[props.bgColor] : props.theme.colors.default}
    border: 0;
    cursor: pointer;
    box-shadow: 0 0 0 rgba(204,169,44, 0.7);
    &:hover {
      animation: 1s ${animations.pulse} ease-in;
    }
    &:focus{
      outline: 0;
      animation: 1s ${animations.pulse} ease-in;
    }
`

FadeInButton.defaultProps = {
  p: 1,
  rounded: true
}

export default FadeInButton
