import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Dropdown from './index'
import { Flex, NavItem, Divider, Space, Heading } from 'components'

storiesOf('Dropdown', module)
  .add('<Dropdown />', () => (
    <Flex auto column>
      <Heading level={1}>
        Dropdown
      </Heading>
      <Divider />
      <Flex>
        <Dropdown title='Settings' bgColor='warning'>
          <NavItem is='a' href=''>Hello</NavItem>
          <NavItem is='a' href=''>Test</NavItem>
        </Dropdown>
        <Space />
        <Dropdown title='Something Else' bgColor='success'>
          <NavItem is='a' href=''>Hello</NavItem>
          <NavItem is='a' href=''>Test</NavItem>
        </Dropdown>
      </Flex>
    </Flex>
  ))
