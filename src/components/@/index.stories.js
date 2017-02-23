import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { Flex, Divider, Heading, Text } from 'components'

storiesOf('Gfas React Components', module)
  .add('default', () => (
    <Flex column>
      <Heading>Gfas React Components</Heading>
      <Divider />
      <Text lg>Welcome to the living document
      for the Global Finaicial Aid Services React
      Component library.</Text>
      <Text>To get started install the following packages. You can use NPM or YARN</Text>
      <pre className='language-bash'>
        <code className='language-bash'>
          yarn add gfas-react-components styled-components font-awesome
        </code>
      </pre>
      <Text lg bold>OR</Text>
      <pre className='language-bash'>
        <code className='language-bash'>
          npm install --save gfas-react-components styled-components font-awesome
        </code>
      </pre>
    </Flex>
  ))
