import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import Button from './index'
import { Space, Flex, Divider, Heading } from 'components'

storiesOf('Button', module)
  .add('<Button />', () => (
    <Flex column>
      <Heading level={1}>Button</Heading>
      <Divider />
      <Flex>
        <Button onClick={action('Default Button Clicked')}>Default</Button>
        <Space />
        <Button bgColor='primary'>Primary</Button>
        <Space />
        <Button bgColor='secondary'>Secondary</Button>
        <Space />
        <Button bgColor='info'>Info</Button>
        <Space />
        <Button bgColor='success'>Success</Button>
        <Space />
        <Button bgColor='warning' is='a' href='/'>Button as anchor</Button>
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
