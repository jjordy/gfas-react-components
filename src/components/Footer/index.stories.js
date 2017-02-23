import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Footer from './index'
import { Flex, Text, Heading, Space, Divider } from 'components'

storiesOf('Footer', module)
  .add('<Footer />', () => (
    <Flex column>
      <Heading>Footer</Heading>
      <Divider />
      <Footer bgColor='black'>
        <Flex align='center' style={{width: 750, margin: 'auto'}}>
          <Text color='white'>Link</Text>
          <Space auto />
          <Text color='white'>2017</Text>
          <Space auto />
          <Text color='white'>Version: </Text>
        </Flex>
      </Footer>
    </Flex>
  ))
