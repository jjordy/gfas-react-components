import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Fixed from './index'
import { Flex, Text, Heading } from 'components'

storiesOf('Fixed', module)
  .add('<Fixed />', () => (
    <Flex column>
      <Flex justify='center' align='center' style={{width: '100%', height: '100vh'}}>
        <Heading>Fixed Component</Heading>
      </Flex>
      <Fixed top left bgColor='error'>
        <Flex
          justify='center'
          align='center'
          style={{
            width: 200,
            height: 200
          }}>
          <Text color='white'>Top Left</Text>
        </Flex>
      </Fixed>
      <Fixed top right bgColor='secondary'>
        <Flex
          justify='center'
          align='center'
          style={{
            width: 200,
            height: 200
          }}>
          <Text color='white'>Top Right</Text>
        </Flex>
      </Fixed>
      <Fixed bottom left bgColor='info'>
        <Flex
          justify='center'
          align='center'
          style={{
            width: 200,
            height: 200
          }}>
          <Text color='white'>Bottom Left</Text>
        </Flex>
      </Fixed>
      <Fixed bottom right bgColor='warning'>
        <Flex
          justify='center'
          align='center'
          style={{
            width: 200,
            height: 200
          }}>
          <Text color='white'>Bottom Right</Text>
        </Flex>
      </Fixed>
    </Flex>
  ))
