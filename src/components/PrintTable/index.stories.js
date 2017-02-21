import React from 'react'
import { storiesOf } from '@kadira/storybook'
import PrintTable from './index'
import { Flex, Divider } from 'components'

const fakeData = [
  {name: 'Jordan', age: '31', occupation: 'Software Engineer'},
  {name: 'Jordan', age: '31', occupation: 'Software Engineer'},
  {name: 'Jordan', age: '31', occupation: 'Software Engineer'},
  {name: 'Jordan', age: '31', occupation: 'Software Engineer'},
  {name: 'Jordan', age: '31', occupation: 'Software Engineer'},
  {name: 'Jordan', age: '31', occupation: 'Software Engineer'},
  {name: 'Jordan', age: '31', occupation: 'Software Engineer'},
  {name: 'Jordan', age: '31', occupation: 'Software Engineer'},
  {name: 'Jordan', age: '31', occupation: 'Software Engineer'},
  {name: 'Jordan', age: '31', occupation: 'Software Engineer'},
  {name: 'Jordan', age: '31', occupation: 'Software Engineer'},
  {name: 'Jordan', age: '31', occupation: 'Software Engineer'},
  {name: 'Jordan', age: '31', occupation: 'Software Engineer'},
  {name: 'Jordan', age: '31', occupation: 'Software Engineer'},
  {name: 'Jordan', age: '31', occupation: 'Software Engineer'},
  {name: 'Jordan', age: '31', occupation: 'Software Engineer'},
  {name: 'Jordan', age: '31', occupation: 'Software Engineer'},
  {name: 'Jordan', age: '31', occupation: 'Software Engineer'},
  {name: 'Jordan', age: '31', occupation: 'Software Engineer'},
  {name: 'Jordan', age: '31', occupation: 'Software Engineer'},
  {name: 'Jordan', age: '31', occupation: 'Software Engineer'},
  {name: 'Jordan', age: '31', occupation: 'Software Engineer'},
  {name: 'Jordan', age: '31', occupation: 'Software Engineer'},
  {name: 'Jordan', age: '31', occupation: 'Software Engineer'},
  {name: 'Jordan', age: '31', occupation: 'Software Engineer'},
  {name: 'Jordan', age: '31', occupation: 'Software Engineer'},
  {name: 'Jordan', age: '31', occupation: 'Software Engineer'},
  {name: 'Jordan', age: '31', occupation: 'Software Engineer'},
  {name: 'Jordan', age: '31', occupation: 'Software Engineer'},
  {name: 'Jordan', age: '31', occupation: 'Software Engineer'},
  {name: 'Jordan', age: '31', occupation: 'Software Engineer'},
  {name: 'Jordan', age: '31', occupation: 'Software Engineer'},
  {name: 'Jordan', age: '31', occupation: 'Software Engineer'},
  {name: 'Jordan', age: '31', occupation: 'Software Engineer'},
  {name: 'Jordan', age: '31', occupation: 'Software Engineer'},
  {name: 'Jordan', age: '31', occupation: 'Software Engineer'},
  {name: 'Jordan', age: '31', occupation: 'Software Engineer'},
  {name: 'Jordan', age: '31', occupation: 'Software Engineer'},
  {name: 'Jordan', age: '31', occupation: 'Software Engineer'},
  {name: 'Jordan', age: '31', occupation: 'Software Engineer'},
  {name: 'Jordan', age: '31', occupation: 'Software Engineer'},
  {name: 'Jordan', age: '31', occupation: 'Software Engineer'}
]

storiesOf('Print Table', module)
  .add('<PrintTable />', () => (
    <Flex column>
      <h1>Styled Print Table</h1>
      <PrintTable data={fakeData} />
    </Flex>
  ))
