import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Input from './index'
import { Flex, Divider, Button, Dropdown, Text, Heading } from 'components'

storiesOf('Input', module)
  .add('<Input />', () => (
    <Flex column>
      <Heading>Input</Heading>
      <Divider />
      <Input label='Default' />
      <Flex mt={2}>
        <Input rounded='left' noLabel label='No Label' placeholder='Hidden label For Inline Forms' />
        <Dropdown title='Adv.' bgColor='warning'>
          <Text sm>Option 1</Text>
          <Text sm>Option 2</Text>
        </Dropdown>
        <Button bgColor='primary' rounded='right'>Submit</Button>
      </Flex>
      <Input rounded={false} label='Not Rounded' />
      <Input label='Error' error='This Field has an error' message='BOOYA' />
      <Input
        label='Success'
        success
        message='You can also pass messages here which pick up the form error / success / info' />
    </Flex>
  ))
