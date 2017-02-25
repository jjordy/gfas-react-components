import styled from 'styled-components'
import Base from '../Base'

const StyledImage = styled(Base('img'))`
  borderRadius: ${props => props.circle ? 999 : props.rounded ? 6 : 0}px;
  margin: auto;
  height: 100%;
`

const Image = ({...rest}) => (
  <StyledImage {...rest} />
)

export default Image
