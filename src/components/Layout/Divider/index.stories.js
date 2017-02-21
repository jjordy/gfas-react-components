import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Divider from './index'
import { Flex } from 'components'

storiesOf('Divider', module)
  .add('<Divider />', () => (
    <Flex column>
      <h1>Hello Divider</h1>
      <Divider borderWidth={2}/>
    </Flex>
  ))
  .add('<Divider borderWidth={4} />', () => (
    <Flex column>
      <h1>Set Your own width</h1>
      <Divider borderWidth={4}/>
    </Flex>
  ))