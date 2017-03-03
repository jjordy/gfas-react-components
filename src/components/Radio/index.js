import React from 'react'
import styled from 'styled-components'
import Base from '../Base'
import Flex from '../Layout/Flex'
import Space from '../Layout/Space'
import Text from '../Text'
import { animations } from '../../theme'

const StyledLabel = styled(Base('label'))`
  font-size: 1.0rem;
  font-weight: 700;
`

const StyledRadio = styled(Base('input'))`
  background: #fff;
  border-radius: 99px;
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
      border-radius: 999px;
      content: '\\f111';
      fontFamily: FontAwesome;
      animation: .5s ${animations.pulse} ease-in;
      font-size: 14px;
      position: absolute;
      top: 1px;
      padding-top:1px;
      margin-left: -1px;
      left: 4.0px;
      color: #FFF;
    }
  }
`

const Radio = ({label, name, message, ...rest}) => (
  <Flex p={2} column>
    <Flex>
      <StyledRadio type='radio' name={name} {...rest} />
      <Space />
      <StyledLabel htmlFor={name}>{label}</StyledLabel>
    </Flex>
    <Flex column mb={0} auto justify='center' align='center'>
      {message ? <Text sm>{message}</Text> : null}
    </Flex>
  </Flex>
)

Radio.propTypes = {
  label: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired,
  message: React.PropTypes.string
}

export default Radio
