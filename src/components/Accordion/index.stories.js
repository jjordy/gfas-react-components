import React from 'react'
import { storiesOf } from '@kadira/storybook'
import {Accordion, AccordionItem} from './index'
import { Flex, Divider, Heading, Text } from 'components'

storiesOf('Accordion', module)
  .add('<Accordion />', () => (
    <Flex auto column>
      <Heading level={1}>Accordion</Heading>
      <Divider />
      <Accordion allowMultiple>
        <AccordionItem title='One'>
          <Text lg>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Sunt ipsa facere officia nesciunt atque nulla perferendis tempora asperiores illo.
          Ratione molestias voluptas, incidunt labore atque assumenda!
          Maxime enim molestiae blanditiis.</Text>
        </AccordionItem>
        <AccordionItem title='Two'>
          <Text lg>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Sunt ipsa facere officia nesciunt atque nulla perferendis tempora asperiores illo.
          Ratione molestias voluptas, incidunt labore atque assumenda!
          Maxime enim molestiae blanditiis.</Text>
        </AccordionItem>
        <AccordionItem title='Three'>
          <Text lg>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Sunt ipsa facere officia nesciunt atque nulla perferendis tempora asperiores illo.
          Ratione molestias voluptas, incidunt labore atque assumenda!
          Maxime enim molestiae blanditiis.</Text>
        </AccordionItem>
        <AccordionItem title='Four'>
          <Text lg>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Sunt ipsa facere officia nesciunt atque nulla perferendis tempora asperiores illo.
          Ratione molestias voluptas, incidunt labore atque assumenda!
          Maxime enim molestiae blanditiis.</Text>
        </AccordionItem>
      </Accordion>
    </Flex>
  ))

