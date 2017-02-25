import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Modal from './index'
import { Flex, Button } from 'components'


class ModalExample extends React.Component {
  constructor (props) {
    super(props)
    this.handleToggleModal = this.handleToggleModal.bind(this)
    this.state = {
      open: false
    }
  }

  handleToggleModal () {
    this.setState({open: !this.state.open})
  }
  render () {
    const { open } = this.state
    return (
      <Flex column>
        <h1>Hello Modal</h1>
        <Flex>
          <Button onClick={this.handleToggleModal}>Open Me</Button>
        </Flex>
        
        <Modal open={open} width={600} onToggle={this.handleToggleModal}>
          <Flex column auto p={3} justify='center' align='center'>
            <img src='http://i.imgur.com/4AiXzf8.jpg' />
          </Flex>
        </Modal>
      </Flex>
    )
  }
}

storiesOf('Modal', module)
  .add('default', () => (
    <Flex column>
      <h1>Hello Modal</h1>
      <Flex>Some Content to see below the modal</Flex>
      <img src='http://i.imgur.com/4AiXzf8.jpg' width='250' />
      <Modal open width={400} onToggle={() => console.log('toggle modal')}>
        <Flex column auto>
          <h1>Hello</h1>
        </Flex>
      </Modal>
    </Flex>
  ))
  .add('Example Usage', () => <ModalExample />)
