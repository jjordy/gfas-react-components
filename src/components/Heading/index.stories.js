import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Heading from './index'
import { Flex, Divider } from 'components'

storiesOf('Heading', module)
  .add('<Heading />', () => (
    <div>
      <Flex column>
        <Heading level={1}>Heading</Heading>
        <Divider />
        <Heading level={1}>H1</Heading>
        <Heading level={2}>H2</Heading>
        <Heading level={3}>H3</Heading>
        <Heading level={4}>H4</Heading>
        <Heading level={5}>H5</Heading>
        <Heading level={6}>H6</Heading>
      </Flex>
    </div>
  ))
  .add('<Heading big/>', () => (
    <div>
      <Flex column>
        <Heading level={1}>Heading Big</Heading>
        <Divider />
        <Heading level={1} big>H1</Heading>
        <Heading level={2} big>H2</Heading>
        <Heading level={3} big>H3</Heading>
        <Heading level={4} big>H4</Heading>
        <Heading level={5} big>H5</Heading>
        <Heading level={6} big>H6</Heading>
      </Flex>
    </div>
  ))
