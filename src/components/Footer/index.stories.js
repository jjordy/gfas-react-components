import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Footer from './index'
import { Flex, NavItem, Heading, Space, Divider } from 'components'

storiesOf('Footer', module)
  .add('<Footer />', () => (
    <Flex column>
      <Heading>Footer</Heading>
      <Divider />
      <Footer bgColor='black'>
        <Flex align='center' style={{width: 750, margin: 'auto'}}>
          <NavItem color='white'>Link</NavItem>
          <Space auto />
          <NavItem color='white'>2017</NavItem>
          <Space auto />
          <NavItem color='white'>Version: </NavItem>
        </Flex>
      </Footer>
    </Flex>
  ))
