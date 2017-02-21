import React from 'react'
import styled from 'styled-components'
import Base from '../Base'
import Flex from '../Layout/Flex'
import Space from '../Layout/Space'
import Text from '../Text'
import Label from '../Label'
import { animations } from '../../theme'

const StyledCheckBox = styled(Base('input'))`
  background: #fff;
  border-radius: 4px;
  border: 2px solid #e7e7e7;
  height: 16px;
  width: 16px;
  padding: 9px;
  align-self: center;
  position: relative;
  appearance: none;
  &:focus {
   outline: 0;
  }
  &:checked {
    background-color: ${props => props.theme.colors.success};
    color: #99a1a7;
    &:after {
      border: 0;
      border : 1px;
      content: '\\f00c';
      fontFamily: FontAwesome;
      animation: .5s ${animations.pulse} ease-in;
      font-size: 14px;
      position: absolute;
      top: 1px;
      padding-top:1px;
      margin-left: -1px;
      left: 3px;
      color: #FFF;
    }
  }
`

const Checkbox = ({label, name, message, auto, ...rest}) => (
  <Flex column>
    <Flex align='center' style={{alignItems: 'center', marginTop: 3}}>
      <Label htmlFor={name}>{label}</Label>
      <Space auto={auto}/>
      <StyledCheckBox type='checkbox' name={name} {...rest} />
    </Flex>
    <Flex column mb={0} mt={1} auto justify='center' align='center'>
      {message ? <Text sm>{message}</Text> : null}
    </Flex>
  </Flex>
)

Checkbox.propTypes = {
  auto: React.PropTypes.bool,
  label: React.PropTypes.string,
  name: React.PropTypes.string,
  message: React.PropTypes.string
}

Checkbox.defaultProps = {
  auto: false
}

export default Checkbox
