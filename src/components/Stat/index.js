import React from 'react'
import styled from 'styled-components'
import Flex from '../Flex'

const Value = styled.div`
 font-weight: 300;
 font-size: ${props => props.theme.sizes[0]}px;
`

const Unit = styled.div`
  font-weight: 700;
  font-size: ${props => props.theme.sizes[3]}px;
`

const Label = styled.div`
  font-size: ${props => props.theme.sizes[5]}px;
`

const Stat = ({unit, label, value, ...rest}) => (
  <Flex {...rest} column>
    <Flex align='baseline' mb={0}>
      <Value mb={0}>{value}</Value>
      <Unit mb={0}>{unit}</Unit>
    </Flex>
    <Label>{label}</Label>
  </Flex>
)

Stat.propTypes = {
  unit: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number
  ]),
  label: React.PropTypes.string,
  value: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number
  ])
}

Stat.defaultProps = {
  p: 0
}

export default Stat
