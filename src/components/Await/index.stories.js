import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Await from './index'
import { Flex, Divider, Heading, Text } from 'components'

class AwaitExample extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      data: null,
      loading: true
    }
  }

  componentDidMount () {
    this.timer = setTimeout(() => {
      this.setState({data: {dkey: 'Im Async'}, loading: false})
    }, 5000)
  }

  componentWillUnmount () {
    clearTimeout(this.timer)
  }
  render () {
    return (
      <Await data={this.state.data} loading={this.state.loading} evaluate={() => this.props.display}>
        {(data) => (
          <div>Data is available now im rendered {data.dkey}</div>
        )}
      </Await>
    )
  }
}

AwaitExample.propTypes = {
  display: React.PropTypes.bool
}

storiesOf('Await', module)
  .add('default', () => (
    <Flex column>
      <Heading level={1}>Await Component</Heading>
      <Divider />
      <Text>Keep yourself from writing conditionals send in your async data and a loading indicator.</Text>
      <AwaitExample display/>
    </Flex>
  ))
  .add('evaluate', () => (
    <Flex column>
      <Heading level={1}>Await Component with evaluation</Heading>
      <Divider />
      <Text>you can also use a seperate evaluator prop to render based on a second condition</Text>
      <AwaitExample display={false}/>
    </Flex>
  ))
