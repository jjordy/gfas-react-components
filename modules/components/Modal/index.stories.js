import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Modal from './index'
import { Flex, Input, Button, Checkbox, Switch, Select,  Divider } from 'components'

storiesOf('Modal', module)
  .add('<Modal />', () => (
    <Flex column>
      <h1>Hello Modal</h1>
      <Flex>Some Content to see below the modal</Flex>
      <img src='http://i.imgur.com/4AiXzf8.jpg' width="250" />
      <Modal open onToggle={() => console.log('toggle modal')}>
        <Flex column auto>
          <h1>Hello</h1>
        </Flex>
      </Modal>
    </Flex>
  ))
