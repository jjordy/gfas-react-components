import React from 'react'
import styled from 'styled-components'
import Base from '../Base'
import Text from '../Text'
import Label from '../Label'
import { animations } from '../../theme'

const InputContainer = styled(Base('div'))`
  width: 100%;
`

const StyledInput = styled(Base('input'))`
  width: 100%;
  height: 30px;
  font-size: 1.0rem;
  margin-top: 5px;
  color: ${props => props.theme.colors.black}
  padding-left: .5rem;
  line-height: 1.58;
  font-weight: 300;
  border: ${props => props.theme.borderWidth}px solid
  ${props => props.error ? props.theme.colors.error : props.success 
    ? props.theme.colors.success : props.theme.colors.gray};
  &:focus {
    outline: none;
    animation: 1s ${animations.pulse} ease-in;
    border: ${props => props.theme.borderWidth}px solid ${props => props.theme.colors.primary};
  }
  &:error {
    border: ${props => props.theme.borderWidth}px solid ${props => props.theme.colors.error};
  }
`

const Input = ({label, noLabel, success, error, message, ...rest}) => (
  <InputContainer {...rest}>
    <Label error={error} success={success} noLabel={noLabel}>{label}</Label>
    <StyledInput error={error} success={success} {...rest} />
    {message && <Text sm color={error ? 'error' : success ? 'success' : 'black'}>{message}</Text>}
  </InputContainer>
)

Input.propTypes = {
  error: React.PropTypes.object,
  label: React.PropTypes.string.isRequired,
  noLabel: React.PropTypes.bool,
  message: React.PropTypes.string,
  success: React.PropTypes.bool
}

Input.defaultProps = {
  rounded: true,
  noLabel: false
}
export default Input
