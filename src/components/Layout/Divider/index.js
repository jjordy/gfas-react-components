import styled from 'styled-components'
import Base from '../../Base'

const Divider = styled(Base('div'))`
  border: 0;
  border-bottom: ${
    props => props.borderWidth ? props.borderWidth
    : props.theme.borderWidth}px solid 
    ${props => props.theme.colors.gray}
`

Divider.defaultProps = {
  mb: 1,
  mt: 1
}

export default Divider
