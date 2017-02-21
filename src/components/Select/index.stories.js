import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Select from './index'
import { Flex, Panel, PanelHeader } from 'components'

const longListOfOptions = [
  {value: 'Hello', label: 'Hello 1'},
  {value: 'Hello', label: 'Hello 2'},
  {value: 'Hello', label: 'Hello 3'},
  {value: 'Hello', label: 'Hello 4'},
  {value: 'Hello', label: 'Hello 5'},
  {value: 'Hello', label: 'Hello 6'},
  {value: 'Hello', label: 'Hello 7'},
  {value: 'Hello', label: 'Hello 8'},
  {value: 'Hello', label: 'Hello 9'},
  {value: 'Hello', label: 'Hello 10'},
]

storiesOf('Select', module)
  .add('<Select />', () => (
    <Flex auto column>
      <Panel>
        <PanelHeader bgColor='success'>Radio Buttons</PanelHeader>
        <form>
          <Flex column>
            <Select name='gender' label='Male' options={longListOfOptions}/>
          </Flex>
        </form>
      </Panel>
    </Flex>
  ))