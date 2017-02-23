import React from 'react'
import { storiesOf } from '@kadira/storybook'
import NavItem from './index'
import { Flex, Divider, Heading, Text } from 'components'

storiesOf('NavItem', module)
  .add('<NavItem />', () => (
    <Flex auto column>
      <Heading>NavItem</Heading>
      <Divider />
      <Text>Same as the Text Component without the margin on the bottom.</Text>
      <NavItem is='a' href='#'>NavItem</NavItem>
    </Flex>
  ))
