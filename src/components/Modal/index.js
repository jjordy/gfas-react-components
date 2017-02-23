import React from 'react'
import styled from 'styled-components'
import Base from '../Base'
import { Panel, PanelHeader } from '../Panel'
import Flex from '../Layout/Flex'
import Space from '../Layout/Space'
import Button from '../Button'
import Text from '../Text'

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
const Modal = ({open, onToggle, bgColor, title, children, ...rest}) => (
  <div>
    {open ? <StyledOverlay {...rest}>
      <Panel style={{maxWidth: '25%', border: 0}}>
        <PanelHeader bgColor={bgColor}>
          <Flex>
            <Text mb={0}>{title}</Text>
            <Space auto/>
            <Button bgColor='transparent' borderRadius={99}><i>&#10005;</i></Button>
          </Flex>
        </PanelHeader>
        <Flex p={1}>{children}</Flex>
      </Panel>
    </StyledOverlay> : null}
  </div>
)

Modal.propTypes = {
  open: React.PropTypes.bool.isRequired,
  onToggle: React.PropTypes.func.isRequired,
  bgColor: React.PropTypes.string,
  title: React.PropTypes.string,
  children: React.PropTypes.node
}

Modal.defaultProps = {
  bgColor: 'primary',
  title: 'Modal'
}

export default Modal
