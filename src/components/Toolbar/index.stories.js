import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Toolbar from './index'
import { Space, Text } from 'components'

storiesOf('Toolbar', module)
  .add('<Toolbar />', () => (
    <div>
      <Toolbar color='white' bgColor='primary' rounded mb={2}>
        <Text strong>Toolbar Title</Text>
        <Space auto />
        <Text>Item</Text>
        <Space />
        <Text>Item 1</Text>
        <Space />
        <Text>Item 2</Text>
      </Toolbar>
      <Text p={1}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Magnam accusantium sit ipsum ullam ipsam voluptas eos unde
        expedita deserunt, alias dolores, veniam reiciendis.
        Autem at ullam consequuntur, voluptate. Eos, laboriosam.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Magnam accusantium sit ipsum ullam ipsam voluptas eos unde
        expedita deserunt, alias dolores, veniam reiciendis.
        Autem at ullam consequuntur, voluptate. Eos, laboriosam.</Text>
      <Text p={1}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Magnam accusantium sit ipsum ullam ipsam voluptas eos unde
        expedita deserunt, alias dolores, veniam reiciendis.
        Autem at ullam consequuntur, voluptate. Eos, laboriosam.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Magnam accusantium sit ipsum ullam ipsam voluptas eos unde
        expedita deserunt, alias dolores, veniam reiciendis.
        Autem at ullam consequuntur, voluptate. Eos, laboriosam.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Magnam accusantium sit ipsum ullam ipsam voluptas eos unde
        expedita deserunt, alias dolores, veniam reiciendis.
        Autem at ullam consequuntur, voluptate. Eos, laboriosam.</Text>
    </div>
  ))
