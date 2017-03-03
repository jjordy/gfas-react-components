import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import Message from './index'
import { Flex, Divider, Heading, Text } from 'components'

storiesOf('Message', module)
  .add('default', () => (
    <div>
      <Flex column align='space-between'>
        <Heading level={1}>Message</Heading>
        <Divider mb={2}/>
        <Message bgColor='primary' mb={1}>
          <Text mb={0} color='white'>This is an alert</Text>
        </Message>
        <Message bgColor='success' mb={1}>
          <Text mb={0} color='white'>This is an alert</Text>
        </Message>
        <Message bgColor='warning' mb={1}>
          <Text mb={0} color='white'>Warning Style alert</Text>
        </Message>
        <Message bgColor='error' onClose={action('on-close')}>
          <Text mb={0} color='white'>Error Style alert</Text>
        </Message>
      </Flex>
    </div>
  ))
