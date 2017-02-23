import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Glyph from './index'
import { Flex, Divider, Heading, NavItem, Text, Space } from 'components'

storiesOf('Glyph', module)
  .add('<Glyph />', () => (
    <div>
      <Flex column>
        <Heading level={1}>Glyph</Heading>
        <Text strong>Include in Font Awesome in your build</Text>
        <NavItem color='warning' href='http://fontawesome.io' target='_blank'>
          <Flex align='center' column bgColor='#34a782' p={1} rounded>
            <Glyph lg icon='font-awesome' color='white'/>
            <Text lg color='white' mb={0}>Font Awesome</Text>
          </Flex>
        </NavItem>
        <Divider />
        <Flex align='center' justify='space-between'>
          <Glyph xs icon='user' color='primary' />
          <Space />
          <Glyph sm icon='user' color='secondary'/>
          <Space />
          <Glyph md icon='user' color='info'/>
          <Space />
          <Glyph lg icon='user' color='warning'/>
          <Space />
          <Glyph xl icon='user' color='success'/>
          <Space />
          <Glyph xxl icon='user' color='error'/>
          <Space />
          <Glyph xl spin icon='spinner' color='gray'/>
        </Flex>
      </Flex>
    </div>
  ))
