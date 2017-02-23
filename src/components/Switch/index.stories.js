import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Switch from './index'
import { Flex, Divider } from 'components'

storiesOf('Switch', module)
  .add('<Switch />', () => (
    <Flex auto column>
      <h1>Switch</h1>
      <Divider />
      <Flex p={2}>
        <Switch bgColor='primary' label='Switch 1' />
      </Flex>
      <Flex p={2}>
        <Switch bgColor='info' label='Switch 2' message='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias hic tenetur in commodi qui accusamus numquam, dolores libero, saepe quidem labore eligendi neque inventore accusantium velit, impedit dolorem dolore necessitatibus.'/>
      </Flex>
      <Flex p={2}>
        <Switch bgColor='warning' label='Switch 2' message='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias hic tenetur in commodi qui accusamus numquam, dolores libero, saepe quidem labore eligendi neque inventore accusantium velit, impedit dolorem dolore necessitatibus.'/>
      </Flex>
    </Flex>
  ))