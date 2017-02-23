import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Input from './index'
import { Flex, Panel, PanelHeader, Button, Space, Checkbox, Switch, Select } from 'components'

storiesOf('Form Examples', module)
  .add('default', () => (
    <Flex column>
      <Panel style={{width: 500, margin: 'auto'}}>
        <PanelHeader bgColor='success'>Checkout</PanelHeader>
        <Flex p={1}>
          <Input rounded='left' name='firstName' label='First Name' placeholder='John' />
          <Input rounded='right'name='lastName' label='Last Name' placeholder='Doe' />
        </Flex>
        <Flex p={1}>
          <Input rounded='left' name='address1' label='Address 1' placeholder='720 Fixed Place' />
          <Input rounded='right' name='address2' label='Address 2' placeholder='Apt 8' />
        </Flex>
        <Flex p={1}>
          <Input rounded='left' name='zip' label='Zip Code' placeholder='39507' />
          <Select rounded={false} label='State' options={[{value: 1, label: 'Mississippi'}]} />
          <Input rounded='right' name='state' label='State' placeholder='MS' />
        </Flex>
        <Flex p={1}>
          <Checkbox
            auto
            name='1year'
            message='Sign up for a whole year and save save 25% vs paying per month this is a great discount for people who already love the service'
            label='Bill me once a year' />
        </Flex>
        <Flex p={1}>
          <Switch
            auto
            message='Sign up for 5 years and save save 45% vs paying per month this is a great discount for people who already love the service'
            label='Bill me once every 5 years' />
        </Flex>
        <Flex p={1}>
          <Space auto/>
          <Button children='Submit' />
        </Flex>
      </Panel>     
    </Flex>
  ))