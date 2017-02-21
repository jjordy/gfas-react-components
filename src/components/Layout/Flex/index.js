import styled from 'styled-components'
import Base from '../../Base'

const Flex = styled(Base())`
  display: flex;
  justify-content: ${props => props.justify ? props.justify : 'flex-start'}
  align-content: ${props => props.align ? props.align : 'flex-start'}
  flex-direction: ${props => props.column ? 'column' : 'row'}
  flex: ${props => props.auto ? '1 1 auto' : null}
`

export default Flex
