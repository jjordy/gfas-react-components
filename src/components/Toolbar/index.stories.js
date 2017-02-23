import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Toolbar from './index'
import { Space, Text, Fixed, NavItem } from 'components'

storiesOf('Toolbar', module)
  .add('Fixed', () => (
    <Fixed top left right>
      <Toolbar color='white' bgColor='success' mb={2}>
        <NavItem is='a' strong to='#'>Toolbar Title</NavItem>
        <Space auto />
        <NavItem is='a' to='#'>Item</NavItem>
        <Space />
        <NavItem is='a' to='#'>Item 1</NavItem>
        <Space />
        <NavItem is='a' to='#'>Item 2</NavItem>
      </Toolbar>
    </Fixed>
  ))
  .add('Rounded', () => (
    <Toolbar rounded color='white' bgColor='secondary' mb={2} p={2}>
      <NavItem strong>Toolbar Title</NavItem>
      <Space auto />
      <NavItem>Item</NavItem>
      <Space />
      <NavItem>Item 1</NavItem>
      <Space />
      <NavItem>Item 2</NavItem>
    </Toolbar>
  ))