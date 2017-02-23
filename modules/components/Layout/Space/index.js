import styled from 'styled-components'
import Base from '../../Base'

const Space = styled(Base('div'))`
  display: flex;
  margin-right: ${props => props.theme.padding[1]}px;
  margin-left: ${props => props.theme.padding[1]}px;
  flex: ${props => props.auto ? '1 1 auto' : null}
`

export default Space
