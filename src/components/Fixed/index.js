import styled from 'styled-components'
import Base from '../Base'

const Fixed = styled(Base('div'))`
  position: fixed;
  top: ${props => props.top ? 0 : null};
  right: ${props => props.right ? 0 : null};
  left: ${props => props.left ? 0 : null};
  bottom: ${props => props.bottom ? 0 : null};
`

export default Fixed
