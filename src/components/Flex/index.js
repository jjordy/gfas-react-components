import styled from 'styled-components'
import Base from '../Base'

const Flex = styled(Base())`
  display: flex;
  width: 100%;
  justify-content: ${props => props.justify ? props.justify : 'flex-start'}
  align-items: ${props => props.align ? props.align : 'flex-start'}
  align-content: flex-start;
  height: ${props => props.height}vh;
  flex-wrap: ${props => props.wrap ? 'wrap' : 'no-wrap'}
  flex-direction: ${props => props.column ? 'column' : 'row'}
  flex: ${props => props.auto ? '1 1 auto' : null}
`

export default Flex
