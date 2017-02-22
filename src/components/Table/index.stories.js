import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Table from './index'
import { Flex, Select, Box, Divider, Text } from 'components'

const fakeData = [
  {'Grade Level': 1, credits: '31', 'account balance': '$1900', eligible: '$2350'},
  {'Grade Level': 2, credits: '31', 'account balance': '$1900', eligible: '$2350'},
  {'Grade Level': 3, credits: '31', 'account balance': '$1900', eligible: '$2350'},
  {'Grade Level': 4, credits: '31', 'account balance': '$1900', eligible: '$2350'},
  {'Grade Level': 5, credits: '31', 'account balance': '$1900', eligible: '0'}
]

const gradeLevelOptions = fakeData.map(
  item => ({value: item['Grade Level'], label: `Grade Level ${item['Grade Level']}`}))

class HighlightExample extends React.Component {
  constructor (props) {
    super(props)
    this.handleChangeGradeLevel = this.handleChangeGradeLevel.bind(this)
    this.state = {
      gradelevel: 1
    }
  }
  handleChangeGradeLevel (evt) {
    this.setState({gradelevel: parseInt(evt.target.value, 10)})
  }
  render () {
    return (
      <Flex column>
        <Box col={3}>
          <Select
            label='Select a grade Level'
            options={gradeLevelOptions}
            value={this.state.gradelevel}
            onChange={this.handleChangeGradeLevel}/>
        </Box>
        <Table data={fakeData} highlightRow={this.state.gradelevel}/>
      </Flex>
    )
  }
}

storiesOf('Table', module)
  .add('<Table />', () => (
    <Flex column>
      <h1>Default</h1>
      <Table data={fakeData} />
    </Flex>
  ))
  .add('<Table header={{}} body={{}} />', () => (
    <Flex column>
      <h1>Custom</h1>
      <Table
        data={fakeData}
        head={{bgColor: 'success'}}
        body={{bgColor: 'lightgray'}}/>
    </Flex>
  ))
  .add('Row Highlight Example', () => (
    <Flex column>
      <h1>Styled Table</h1>
      <Divider />
      <Text>Feed the table a highlight option for advanced usage.</Text>
      <HighlightExample />
    </Flex>
  ))
