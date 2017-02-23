import React from 'react'
import { storiesOf } from '@kadira/storybook'
import {List, ListHeading, ListItem} from './index'
import { Flex, Divider, Heading, Box } from 'components'

storiesOf('List', module)
  .add('default', () => (
    <div>
      <Flex column>
        <Heading level={1}>List</Heading>
        <Divider />
        <Flex>
          <Box col={12} p={1}>
            <List>
              <ListHeading level={2}>Some things I like</ListHeading>
              <ListItem value='$2700' desc='Item 1' />
              <ListItem value='$2700' desc='Item 2' />
              <ListItem value='$2700' desc='Item 3' />
              <ListItem value='$2700' desc='Item 4' />
            </List>
          </Box>
        </Flex>
        <Flex>
          <Box col={6} p={1}>
            <List>
              <ListHeading level={3}>Purchase Orders</ListHeading>
              <ListItem value='$2700' desc='Item 1' />
              <ListItem value='$2700' desc='Item 2' />
              <ListItem value='$2700' desc='Item 3' />
              <ListItem value='$2700' desc='Item 4' />
            </List>
          </Box>
          <Box col={6} p={1}>
            <List>
              <ListHeading level={4}>Another List</ListHeading>
              <ListItem value='$2700' desc='Item 1' />
              <ListItem value='$2700' desc='Item 2' />
              <ListItem value='$2700' desc='Item 3' />
              <ListItem value='$2700' desc='Item 4' />
            </List>
          </Box>
        </Flex>
      </Flex>
    </div>
  ))

