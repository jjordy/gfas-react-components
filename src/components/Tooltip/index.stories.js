import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import Tooltip from './index'
import { Divider, Flex, Heading, Button, Space } from 'components'

storiesOf('Tooltip', module)
  .add('default', () => (
    <Flex column>
      <Heading>Tooltip</Heading>
      <Divider />
      <Flex
        justify='center'
        align='center'>
        <Tooltip
          message='Welcome this is a tooltip'
          eventType='hover'
          direction='left'
          bgColor='success'>
          <Button onClick={action('Button 1 clicked')}>
            Tooltip Button
          </Button>
        </Tooltip>
        <Space />
        <Tooltip
          message='Welcome this is a tooltip'
          eventType='hover'
          color='black'
          bgColor='warning'>
          <Button onClick={action('Button 2 clicked')}>
            Tooltip Button
          </Button>
        </Tooltip>
        <Space />
        <Tooltip
          message='Welcome this is a tooltip'
          eventType='hover'
          direction='right'
          bgColor='success'>
          <Button onClick={action('Button clicked.')}>
            Tooltip Button
          </Button>
        </Tooltip>
      </Flex>
    </Flex>
  ))
