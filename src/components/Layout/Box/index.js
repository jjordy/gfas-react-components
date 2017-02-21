import styled from 'styled-components'
import Base from '../../Base'

const calcWidth = (col, total = 12) => {
  return col / 12 * 100
}

const Box = styled(Base())`
  align-self: ${props => props.align ? props.align : 'flex-start'}
  width: ${props => props.col ? calcWidth(props.col) : 100}%
`

export default Box
