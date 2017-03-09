import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Flex from '../Flex'
import { Text, Heading } from 'components'

storiesOf('Flex', module)
  .add('<Flex />', () => (
    <Flex column auto>
      <h1>Flexbox Component</h1>
      <Flex p={1} bgColor='primary' mb={1}>
        <Text mb={0} color='white'>Normal Flex with Padding</Text>
      </Flex>
    </Flex>
  ))
  .add('<Flex justify=center />', () => (
    <Flex column auto>
      <h1>Centered</h1>
      <Flex p={1} bgColor='warning' align='center' justify='center' mb={1}>
        <Text mb={0}>Justified & Aligned Center</Text>
      </Flex>
    </Flex>
  ))
  .add('<Flex justify=space-between />', () => (
    <Flex column auto>
      <h1>Space Between</h1>
      <Flex p={1} bgColor='error' align='center' justify='space-between' mb={1}>
        <Text mb={0} color='white'>Space Between</Text>
        <Text mb={0} color='white'>Space Between</Text>
        <Text mb={0} color='white'>Space Between</Text>
      </Flex>
    </Flex>
  ))
  .add('<Flex auto />', () => (
    <Flex column auto>
      <h1>Flex with auto width</h1>
      <Flex bgColor='success' p={1}>
        <Flex auto>
          <p>Flex auto</p>
        </Flex>
        <p>Next Item</p>
      </Flex>
    </Flex>
  ))
  .add('Vertically Center Something', () => (
    <Flex height={100} justify='center' align='center' bgColor='info'>
      <Heading color='white'>Vertically Centered</Heading>
    </Flex>
  ))
