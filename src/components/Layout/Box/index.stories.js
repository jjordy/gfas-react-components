import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Box from '.'
import Flex from '../Flex'

const styles = {
  backgroundColor: '#e7e7e7',
  height: 75
}

storiesOf('Box', module)
  .add('<Box />', () => (
    <Flex column auto>
      <h1>Box Component</h1>
      <Flex p={1}>
        <Box col={12} style={styles}>Box 12</Box>
      </Flex>
      <Flex auto p={1}>
        <Box col={6} style={styles}>Box 6</Box>
        <Box col={6} style={styles}>Box 6</Box>
      </Flex>
      <Flex auto p={1}>
        <Box col={4} style={styles}>Box 4</Box>
        <Box col={4} style={styles}>Box 4</Box>
        <Box col={4} style={styles}>Box 4</Box>
      </Flex>
      <Flex p={1}>
        <Box col={3} style={styles}>Box 3</Box>
        <Box col={3} style={styles}>Box 3</Box>
        <Box col={3} style={styles}>Box 3</Box>
        <Box col={3} style={styles}>Box 3</Box>
      </Flex>
    </Flex>
  ))
  .add('<Box align=center />', () => (
    <Flex column auto>
      <h1>Box Component</h1>
      <Flex>
        <Box col={3} align='center' style={styles}>
          <p>Box 12</p>
        </Box>
      </Flex>
    </Flex>
  ))