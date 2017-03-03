import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Box from '.'
import { Divider, Flex } from 'components'

const styles = {
  backgroundColor: '#e7e7e7',
  height: 75
}

storiesOf('Box', module)
  .add('<Box />', () => (
    <div>
      <Flex p={1} column>
        <h1>Box</h1>
        <Divider />
      </Flex>
      <Flex colum p={1}>
        <Box col={12} bgColor='warning'>
          <Flex justify='center' align='center'>
            Box 12
          </Flex>
        </Box>
      </Flex>
      <Flex p={1}>
        <Box col={6} bgColor='info'>
          <Flex justify='center' align='center'>
            Box 6
          </Flex>
        </Box>
        <Box col={6} bgColor='error'>
          <Flex justify='center' align='center'>
            Box 6
          </Flex>
        </Box>
      </Flex>
      <Flex p={1}>
        <Box col={4} bgColor='success'>
          <Flex justify='center' align='center'>
            Box 4
          </Flex>
        </Box>
        <Box col={4} bgColor='secondary'>
          <Flex justify='center' align='center'>
            Box 4
          </Flex>
        </Box>
        <Box col={4} bgColor='success'>
          <Flex justify='center' align='center'>
            Box 4
          </Flex>
        </Box>
      </Flex>
      <Flex p={1}>
        <Box col={3} bgColor='primary'>
          <Flex justify='center' align='center'>
            Box 3
          </Flex>
        </Box>
        <Box col={3} bgColor='error'>
          <Flex justify='center' align='center'>
            Box 3
          </Flex>
        </Box>
        <Box col={3} bgColor='info'>
          <Flex justify='center' align='center'>
            Box 3
          </Flex>
        </Box>
        <Box col={3} bgColor='warning'>
          <Flex justify='center' align='center'>
            Box 3
          </Flex>
        </Box>
      </Flex>
      <Flex p={1}>
        <Box col={2} bgColor='secondary'>
          <Flex justify='center' align='center'>
            Box 2
          </Flex>
        </Box>
        <Box col={2} bgColor='primary'>
          <Flex justify='center' align='center'>
            Box 2
          </Flex>
        </Box>
        <Box col={2} bgColor='success'>
          <Flex justify='center' align='center'>
            Box 2
          </Flex>
        </Box>
        <Box col={2} bgColor='info'>
          <Flex justify='center' align='center'>
            Box 2
          </Flex>
        </Box>
        <Box col={2} bgColor='warning'>
          <Flex justify='center' align='center'>
            Box 2
          </Flex>
        </Box>
        <Box col={2} bgColor='error'>
          <Flex justify='center' align='center'>
            Box 2
          </Flex>
        </Box>
      </Flex>
      <Flex p={1}>
        <Box col={1} bgColor='secondary'>
          <Flex justify='center' align='center'>
            Box 1
          </Flex>
        </Box>
        <Box col={1} bgColor='primary'>
          <Flex justify='center' align='center'>
            Box 1
          </Flex>
        </Box>
        <Box col={1} bgColor='success'>
          <Flex justify='center' align='center'>
            Box 1
          </Flex>
        </Box>
        <Box col={1} bgColor='info'>
          <Flex justify='center' align='center'>
            Box 1
          </Flex>
        </Box>
        <Box col={1} bgColor='warning'>
          <Flex justify='center' align='center'>
            Box 1
          </Flex>
        </Box>
        <Box col={1} bgColor='error'>
          <Flex justify='center' align='center'>
            Box 1
          </Flex>
        </Box>
        <Box col={1} bgColor='secondary'>
          <Flex justify='center' align='center'>
            Box 1
          </Flex>
        </Box>
        <Box col={1} bgColor='primary'>
          <Flex justify='center' align='center'>
            Box 1
          </Flex>
        </Box>
        <Box col={1} bgColor='success'>
          <Flex justify='center' align='center'>
            Box 1
          </Flex>
        </Box>
        <Box col={1} bgColor='info'>
          <Flex justify='center' align='center'>
            Box 1
          </Flex>
        </Box>
        <Box col={1} bgColor='warning'>
          <Flex justify='center' align='center'>
            Box 1
          </Flex>
        </Box>
        <Box col={1} bgColor='error'>
          <Flex justify='center' align='center'>
            Box 1
          </Flex>
        </Box>
      </Flex>
    </div>
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
