import React from 'react'
import styled from 'styled-components'
import Base from '../Base'
import Flex from '../Flex'
import Space from '../Space'
import Button from '../Button'
import Glyph from '../Glyph'

const StyledMessage = styled(Base('div'))`
  width: 100%;
`

StyledMessage.defaultProps = {}
const Message = ({children, onClose, ...rest}) => (
  <StyledMessage {...rest}>
    <Flex align='center' p={1}>
      {children}
      <Space auto />
      {onClose && <Button bgColor='transparent' onClick={onClose} circle>
        <Glyph xs icon='close' />
      </Button>}
    </Flex>
  </StyledMessage>
)

Message.propTypes = {
  children: React.PropTypes.node.isRequired,
  onClose: React.PropTypes.func
}

StyledMessage.defaultProps = {
  rounded: true
}

export default Message
