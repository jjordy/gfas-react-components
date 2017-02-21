import React from 'react'
import styled from 'styled-components'
import Base from '../Base'
import Label from '../Label'
import Flex from '../Layout/Flex'

const StyledSelectBox = styled(Base('select'))`
  height: 30px;
  margin-bottom: 15px;
  margin-top: 5px;
  &:focus {
    outline: 0;
  }
`

const Select = ({ label, options, name, ...rest }) => (
  <Flex column>
    <Label htmlFor={name}>{label}</Label>
    <StyledSelectBox {...rest} name={name}>
      {options.map((option, id) => <option value={option.value} key={id}>{option.label}</option>)}
    </StyledSelectBox>
  </Flex>
)

Select.propTypes = {
  options: React.PropTypes.array.isRequired,
  label: React.PropTypes.string
}

Select.defaultProps = {
  rounded: true
}

export default Select
