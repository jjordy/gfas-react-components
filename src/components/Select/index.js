import React from 'react'
import styled from 'styled-components'
import Base from '../Base'
import Label from '../Label'
import Flex from '../Layout/Flex'
import Text from '../Text'

const StyledSelectBox = styled(Base('select'))`
  height: 30px;
  border: 0;
  appearance: none;
  width: 100%;
  line-height: 1.58;
  font-size: 1.0rem;
  padding-right: 10px;
  padding-left: 10px;
  font-weight: 300;
  border: ${props => props.theme.borderWidth}px solid
  ${props => props.error ? props.theme.colors.error : props.success
    ? props.theme.colors.success : props.theme.colors.gray};
  margin-top: 5px;
  &:focus {
    outline: 0;
  }
`

const Select = ({ label, noLabel, options, message, success, error, name, ...rest }) => (
  <Flex column mb={1}>
    <Label
      htmlFor={name}
      noLabel={noLabel}
      success={success}
      error={error}>{label}</Label>
    <StyledSelectBox {...rest} name={name} success={success} error={error}>
      {options.map((option, id) => <option value={option.value} key={id}>{option.label}</option>)}
    </StyledSelectBox>
    {!error && message && <Text sm color={success ? 'success' : 'black'}>{message}</Text>}
    {error && <Text sm color='error'>{error}</Text>}
  </Flex>
)

Select.propTypes = {
  options: React.PropTypes.array.isRequired,
  label: React.PropTypes.string,
  noLabel: React.PropTypes.bool,
  success: React.PropTypes.bool,
  message: React.PropTypes.string,
  error: React.PropTypes.string,
  name: React.PropTypes.string
}

Select.defaultProps = {
  rounded: true
}

export default Select
