import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Stat from './index'
import { Flex, Divider, Heading } from 'components'

storiesOf('Stat', module)
  .add('<Stat />', () => (
    <Flex auto column>
      <Heading>Stat</Heading>
      <Divider />
      <Stat unit='GB' value={32} label='SSD Size' />
    </Flex>
  ))
