import styled from 'styled-components'
import Base from '../Base'

const Text = styled(Base('p'))`
  font-size: ${props => props.lg ? 1.3 : props.sm ? 0.9 : 1.2}rem;
  font-weight: ${props => props.strong ? 600 : 300};
  padding: ${props => props.p ? props.theme.padding[props.p] : 0}px
  line-height: 1.58;
`

Text.defaultProps = {
  mb: 2
}

export default Text
