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
          <form>
            <Input
              name='Field1'
              label='Field One' />
            <Input
              name='Field2'
              error
              label='Field Two'
              message='Errored Field' />
            <Select
              label='Select Me'
              options={[{value: '1', label: 'Hello'}]} />
            <Flex justify='space-around' column>
              <Checkbox auto label='Check me' />
              <Divider borderWidth={2}/>
              <Switch auto label='Switch Me' />
            </Flex>
          </form>
          <Button mb={1} bgColor='success' children='Submit' />
          <Button bgColor='error' children='Close' />
        </Flex>
      </Modal>
    </Flex>
  ))
