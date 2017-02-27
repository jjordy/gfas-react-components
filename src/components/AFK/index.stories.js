import React from 'react'
import { storiesOf } from '@kadira/storybook'
import AFK from './index'
import { Flex, Divider, Heading, Text } from 'components'

storiesOf('AFK', module)
  .add('default', () => (
    <Flex column>
      <Heading level={1}>AFK</Heading>
      <Divider />
      <Text>After 5 seconds the timer will give you 30 seconds to respond to the modal
        if you fail to respond before the timeout the onTimeout action will be called.
        It could be a logout action or anything that requires time sensitive action.</Text>
      <Flex>
        <AFK timeout={5000} onTimeout={() => alert('Failed to respond in time')} />
      </Flex>
    </Flex>
  ))
