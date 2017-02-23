import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Button from './index'
import { Space, Flex, Divider } from 'components'

storiesOf('Button', module)
  .add('<Button />', () => (
    <Flex column>
      <h1>Button</h1>
      <Divider />
      <Flex>
        <Button>Default</Button>
        <Space />
        <Button bgColor='primary'>Primary</Button>
        <Space />
        <Button bgColor='secondary'>Secondary</Button>
        <Space />
        <Button bgColor='info'>Info</Button>
        <Space />
        <Button bgColor='success'>Success</Button>
        <Space />
        <Button bgColor='warning'>Warning</Button>
        <Space />
        <Button bgColor='error'>Error</Button>
      </Flex>
    </Flex>
  ))
  .add('<Button lg />', () => (
    <Flex>
      <Button lg>Default</Button>
      <Space />
      <Button bgColor='primary' lg>Primary</Button>
      <Space />
      <Button bgColor='secondary' lg>Secondary</Button>
      <Space />
      <Button bgColor='info' lg>Info</Button>
      <Space />
      <Button bgColor='success' lg>Success</Button>
      <Space />
      <Button bgColor='warning' lg>Warning</Button>
      <Space />
      <Button bgColor='error' lg>Error</Button>
    </Flex>
  ))