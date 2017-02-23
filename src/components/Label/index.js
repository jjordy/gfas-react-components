import styled from 'styled-components'
import Base from '../Base'

const Label = styled(Base('label'))`
  font-weight: 700;
  color: ${props => props.error
    ? props.theme.colors.error
    : props.success
    ? props.theme.colors.success
    : 'inherit'}
  font-size: 1rem;
  display: ${props => props.noLabel ? 'none' : 'flex'}
  flex-direction: column;
`

export default Label
