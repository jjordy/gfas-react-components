import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Image from './index'
import { Flex, Box, Divider, Heading } from 'components'
const img = require('./test.png')

storiesOf('Image', module)
  .add('default', () => (
    <div>
      <Flex column>
        <Heading level={1}>Image</Heading>
        <Divider />
        <Flex>
          <Box col={3}>
            Regular Responsive
            <Image src={img} />
          </Box>
          <Box col={3}>
            Rounded
            <Image src={img} rounded />
          </Box>
          <Box col={3}>
            Circle
            <Image src={img} circle/>
          </Box>
        </Flex>
      </Flex>
    </div>
  ))
