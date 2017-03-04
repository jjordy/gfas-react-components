import React from 'react'
import styled from 'styled-components'
import Base from '../Base'
import { Panel, PanelHeader } from '../Panel'
import Flex from '../Flex'
import Space from '../Space'
import Button from '../Button'
import Text from '../Text'
import Glyph from '../Glyph'

const StyledOverlay = styled(Base('div'))`
  top: 0;
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  height: 100vh;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 2;
`
const Modal = ({open, onToggle, bgColor, width, title, children, ...rest}) => (
  <div>
    {open ? <StyledOverlay {...rest}>
      <Panel style={{border: 0, maxWidth: width}}>
        <PanelHeader bgColor={bgColor}>
          <Flex>
            <Text mb={0}>{title}</Text>
            <Space auto/>
            <Button
              bgColor='transparent'
              onClick={onToggle}
              borderRadius={99}
              style={{height: 36, width: 36}}>
              <Glyph xs icon='close' />
            </Button>
          </Flex>
        </PanelHeader>
        <Flex p={1}>{children}</Flex>
      </Panel>
    </StyledOverlay> : null}
  </div>
)

Modal.propTypes = {
  open: React.PropTypes.bool.isRequired,
  onToggle: React.PropTypes.func,
  bgColor: React.PropTypes.string,
  title: React.PropTypes.string,
  children: React.PropTypes.node,
  width: React.PropTypes.number
}

Modal.defaultProps = {
  bgColor: 'primary',
  title: 'Modal',
  onToggle: () => {}
}

export default Modal
