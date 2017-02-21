import React from 'react'
import styled from 'styled-components'
import Base from '../Base'
import Text from '../Text'
import Label from '../Label'
import { animations } from '../../theme'

const InputContainer = styled(Base('div'))`
  flex: 1 1 auto;
  margin-bottom: 15px;
`

const StyledInput = styled(Base('input'))`
  width: 100%;
  height: 30px;
  font-size: 1.0rem;
  display: flex;
  margin-top: 5px;
  color: ${props => props.theme.colors.black}
  padding-left: .5rem;
  line-height: 1.58;
  font-weight: 300;
  border: ${props => props.theme.borderWidth}px solid
  ${props => props.error ? props.theme.colors.error : props.theme.colors.gray};
  &:focus {
    outline: none;
    animation: 1s ${animations.pulse} ease-in;
    border: ${props => props.theme.borderWidth}px solid ${props => props.theme.colors.primary};
  }
  &:error {
    border: ${props => props.theme.borderWidth}px solid ${props => props.theme.colors.error};
  }
`

const Input = ({label, error, message, ...rest}) => (
  <InputContainer>
    <Label error={error}>{label}
      <StyledInput error={error} {...rest} />
    </Label>
    <Text sm color={error ? 'error' : 'black'}>{message}</Text>
  </InputContainer>
)

Input.propTypes = {
  error: React.PropTypes.object,
  label: React.PropTypes.string.isRequired,
  message: React.PropTypes.string
}

Input.defaultProps = {
  rounded: true
}
export default Input
