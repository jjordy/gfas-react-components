import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Checkbox from './index'
import { Flex, Heading, Divider } from 'components'

storiesOf('Checkbox', module)
  .add('<Checkbox />', () => (
    <Flex auto column>
      <Heading>Checkbox</Heading>
      <Divider />
      <form>
        <Flex column p={1}>
          <Checkbox
            column
            label='Lorem ipsum longer message'
            message={`
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Alias hic tenetur in commodi qui accusamus numquam, dolores libero,
                saepe quidem labore eligendi neque inventore accusantium velit,
                impedit dolorem dolore necessitatibus.`} />
        </Flex>
      </form>
    </Flex>
  ))
  .add('<Checkbox auto/>', () => (
    <Flex auto column>
      <Heading>Checkbox with auto width.</Heading>
      <Divider />
      <form>
        <Flex column p={1}>
          <Checkbox
            column
            auto
            label='Lorem ipsum longer message'
            message={`
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Alias hic tenetur in commodi qui accusamus numquam, dolores libero,
                saepe quidem labore eligendi neque inventore accusantium velit,
                impedit dolorem dolore necessitatibus.`} />
        </Flex>
      </form>
    </Flex>
  ))
