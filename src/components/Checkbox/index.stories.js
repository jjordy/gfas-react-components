import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Checkbox from './index'
import { Flex, Panel, PanelHeader } from 'components'

storiesOf('Checkbox', module)
  .add('<Checkbox />', () => (
    <Flex auto column>
      <Panel>
        <PanelHeader bgColor='success'>Checkout</PanelHeader>
        <form>
          <Flex column p={1}>
            <Checkbox
              column
              label='Lorem ipsum longer message'
              message={`
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Alias hic tenetur in commodi qui accusamus numquam, dolores libero,
                saepe quidem labore eligendi neque inventore accusantium velit,
                impedit dolorem dolore necessitatibus.`}/>
          </Flex>
        </form>
      </Panel>
    </Flex>
  ))
  .add('<Checkbox auto/>', () => (
    <Flex auto column>
      <Panel style={{maxWidth: 400, margin: 'auto'}}>
        <PanelHeader bgColor='success'>Checkout</PanelHeader>
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
                impedit dolorem dolore necessitatibus.`}/>
          </Flex>
        </form>
      </Panel>
    </Flex>
  ))
