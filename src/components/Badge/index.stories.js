import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Badge from '.'
import { Divider, Flex, Heading } from 'components'


storiesOf('Badge', module)
  .add('default', () => (
    <div>
      <Flex p={1} column>
        <Heading>Badge</Heading>
        <Divider />
        <Badge children='default' mb={1}/>
      </Flex>
    </div>
  ))
  .add('circle', () => (
    <div>
      <Flex p={1} column>
        <Heading>Circle Badge</Heading>
        <Divider />
        <Badge children='9.7' circle mb={1} />
      </Flex>
    </div>
  ))
  .add('pill', () => (
    <div>
      <Flex p={1} column>
        <Heading>Pill Badge</Heading>
        <Divider />
        <Badge children='Pill Style' pill mb={1} />
      </Flex>
    </div>
  ))
