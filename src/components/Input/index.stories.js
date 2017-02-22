import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Input from './index'
import { Flex } from 'components'

storiesOf('Input', module)
  .add('<Input />', () => (
    <div>
      <Flex column>
        <Input label='Default' />
        <Input noLabel label='No Label' placeholder='Hidden label' />
        <Input rounded={false} label='Not Rounded' />
        <Input label='Error' error />
        <Input label='Success' success message='You can also pass messages here which pick up the form error / success / info' />
      </Flex>
    </div>
  ))