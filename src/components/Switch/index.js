import React from 'react'
import styled from 'styled-components'
import Base from '../Base'
import Flex from '../Flex'
import Space from '../Space'
import Text from '../Text'
import Label from '../Label'
import { animations } from '../../theme'

const StyledSwitch = styled(Base('label'))`
  position: relative;
  width: 40px;
  height: 26px;
`

const SwitchInput = styled(Base('input'))`
  display: none;
  &:checked + div {
    animation: 1s ${animations.pulse} ease-out;
    background-color: ${props => props.bgColor ? props.theme.colors[props.bgColor] : props.theme.colors.success};
  }
  &:focus + div {
    box-shadow: 0 0 1px ${props => props.bgColor ? props.theme.colors[props.bgColor] : props.theme.colors.success};
  }
  &:checked + div:before {
    transform: translateX(13px);
  }
`

const Slider = styled(Base('div'))`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  border-radius: 34px;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
  &:before {
    position: absolute;
    content: "";
    height: 20px;
    border-radius: 50%;
    width: 20px;
    left: 4px;
    bottom: 3px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
  }
`

const Switch = ({label, name, message, auto, onClick, ...rest}) => (
  <Flex column>
    <Flex style={{alignItems: 'center'}}>
      <Label>{label}</Label>
      <Space auto={auto}/>
      <StyledSwitch htmlFor={name} onClick={onClick}>
        <SwitchInput type='checkbox' {...rest} />
        <Slider />
      </StyledSwitch>
    </Flex>
    <Text sm>{message}</Text>
  </Flex>
)

Switch.propTypes = {
  auto: React.PropTypes.bool,
  label: React.PropTypes.string.isRequired,
  name: React.PropTypes.string,
  message: React.PropTypes.string,
  onClick: React.PropTypes.func
}

export default Switch
