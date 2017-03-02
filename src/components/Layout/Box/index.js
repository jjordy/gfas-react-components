import styled from 'styled-components'
import Base from '../../Base'

const calcWidth = (col, total = 12) => {
  return col / 12 * 100
}

const Box = styled(Base())`
  flex: ${props => props.auto ? '1 1 auto' : null};
  align-self: ${props => props.align ? props.align : 'flex-start'}
  width: ${props => props.col ? calcWidth(props.col) : 100}%;
  @media(max-width: 768px) {
    width: ${props => props.sm ? calcWidth(props.sm) : calcWidth(props.col || 12)};
  }
`

export default Box
