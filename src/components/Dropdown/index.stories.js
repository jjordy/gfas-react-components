import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Dropdown from './index'
import { Flex, NavItem, Divider, Button } from 'components'

storiesOf('Dropdown', module)
  .add('<Dropdown />', () => (
    <Flex auto column>
      <Dropdown title='Settings' bgColor='warning'>
        <NavItem is='a' href=''>Hello</NavItem>
        <NavItem is='a' href=''>Test</NavItem>
      </Dropdown>
      <Divider />
      <Flex>
        <Button onClick={() => console.log('Hello')}>Hello</Button>
      </Flex>
    </Flex>
  ))
