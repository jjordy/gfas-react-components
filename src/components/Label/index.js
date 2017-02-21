import styled from 'styled-components'
import Base from '../Base'

const Label = styled(Base('label'))`
  font-weight: 700;
  color: ${props => props.error ? props.theme.colors.error : 'inherit'}
  font-size: 1rem;
`

export default Label
