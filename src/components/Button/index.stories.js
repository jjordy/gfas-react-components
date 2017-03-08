import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Button from './index'
import { Space, Flex, Divider, Heading } from 'components'

storiesOf('Button', module)
  .add('<Button />', () => (
    <Flex column>
      <Heading level={1}>Button</Heading>
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
        <Button circle bgColor='error'>E</Button>
      </Flex>
    </Flex>
  ))
  .add('<Button lg />', () => (
    <Flex column>
      <Heading level={1}>Button Large</Heading>
      <Divider />
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
    </Flex>
  ))
