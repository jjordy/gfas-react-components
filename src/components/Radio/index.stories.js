import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Radio from './index'
import { Flex, Panel, PanelHeader } from 'components'

storiesOf('Radio', module)
  .add('<Radio />', () => (
    <Flex auto column>
      <Panel>
        <PanelHeader bgColor='success'>Radio Buttons</PanelHeader>
        <form>
          <Flex column>
            <Radio name='gender' label='Male' value='male' />
            <Radio name='gender' label='Female' value='female'/>
          </Flex>
        </form>
      </Panel>
    </Flex>
  ))
