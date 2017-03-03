import React from 'react'
import { storiesOf } from '@kadira/storybook'
import {Panel, PanelHeader} from './index'
import { Flex, Button, Space, Text } from 'components'

storiesOf('Panel', module)
  .add('<Panel />', () => (
    <Flex column>
      <Panel mb={2}>
        <PanelHeader bgColor='success'>Success Panel Example</PanelHeader>
        <Flex p={1} column>
          <Text strong>
            Bacon ipsum dolor amet jerky frankfurter venison,
            landjaeger jowl burgdoggen meatball flank brisket t-bone.
            Kielbasa alcatra ground round fatback boudin ribeye.
            Pork loin shoulder prosciutto short ribs t-bone doner
            kielbasa spare ribs pig alcatra strip steak. Kielbasa
            alcatra bacon filet mignon. Pancetta ground round pork loin prosciutto.
          </Text>
          <Flex>
            <Space auto />
            <Button bgColor='primary'>Submit</Button>
          </Flex>
        </Flex>
      </Panel>
    </Flex>
  ))
  .add('<PanelHeader />', () => (
    <Flex>
      <Panel>
        <PanelHeader bgColor='primary'>
          <Flex>
            Title
            <Space auto />
            <i>&#10005;</i>
          </Flex>
        </PanelHeader>
      </Panel>
    </Flex>
  ))
