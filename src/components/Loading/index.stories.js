import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Loading from './index'
import { Flex, Divider, Heading } from 'components'

storiesOf('Loading', module)
  .add('<Loading />', () => (
    <Flex auto column>
      <Heading>Loading</Heading>
      <Divider />
      <Loading icon='spinner' />
    </Flex>
  ))
