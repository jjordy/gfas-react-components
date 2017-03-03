import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Select from './index'
import { Flex, Divider } from 'components'

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
  {value: 'Hello', label: 'Hello 10'}
]

storiesOf('Select', module)
  .add('<Select />', () => (
    <Flex auto column p={1}>
      <h1>Select</h1>
      <Divider />
      <Select name='gender' label='Male' options={longListOfOptions}/>
      <Select name='gender' label='NO Label' noLabel options={longListOfOptions}/>
      <Select name='gender' label='Male' options={longListOfOptions} success/>
      <Select
        name='gender'
        message='Hello this is a message you can also use these.'
        label='Male'
        options={longListOfOptions}
        error='This field has an error that overrides the default message :)'/>
    </Flex>
  ))
