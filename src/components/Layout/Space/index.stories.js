import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Space from './index'
import { Flex } from 'components'

storiesOf('Space', module)
  .add('<Space />', () => (
    <Flex>
        <h1>Hello Space</h1>
        <Space />
        <h1>Hello Space</h1>
    </Flex>
  ))
  .add('<Space auto/>', () => (
    <Flex>
        <h1>Hello Auto Space</h1>
        <Space auto />
        <h1>Hello Auto Space</h1>
    </Flex>
  ))