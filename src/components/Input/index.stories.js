import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Input from './index'
import { Flex, Divider, Button } from 'components'

storiesOf('Input', module)
  .add('<Input />', () => (
    <div>
      <Flex column>
        <h1>Input</h1>
        <Divider />
        <Input label='Default' />
        <Flex mt={2}>
          <Input rounded='left' noLabel label='No Label' placeholder='Hidden label For Inline Forms' />
          <Button bgColor='primary' rounded='right'>Submit</Button>
        </Flex>
        <Input rounded={false} label='Not Rounded' />
        <Input label='Error' error='This Field has an error' message='BOOYA' />
        <Input
          label='Success'
          success
          message='You can also pass messages here which pick up the form error / success / info' />
      </Flex>
    </div>
  ))
