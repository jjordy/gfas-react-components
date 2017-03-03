import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Text from './index'
import { Flex, Divider } from 'components'

const RenderLongText = ({...rest}) => (
  <Flex column p={3}>
    <h1>Flow Text</h1>
    <Divider />
    <Text {...rest}>
        Bacon ipsum dolor amet jerky frankfurter venison,
        landjaeger jowl burgdoggen meatball flank brisket t-bone.
        Kielbasa alcatra ground round fatback boudin ribeye.
        Pork loin shoulder prosciutto short ribs t-bone doner
        kielbasa spare ribs pig alcatra strip steak.
        Kielbasa alcatra bacon filet mignon.
        Pancetta ground round pork loin prosciutto.
      </Text>
    <Text{...rest}>
        Cupim jerky beef ribs turducken, rump
        boudin ham hock cow chicken shank pork
        loin pork belly short ribs pancetta.
        Frankfurter bacon tongue porchetta spare ribs ball tip pancetta.
        Strip steak turkey picanha rump, kevin t-bone tail spare ribs
        swine filet mignon pig sirloin. Salami pork belly shoulder landjaeger.
      </Text>
    <Text {...rest}>
        Prosciutto shank ham, bacon burgdoggen capicola boudin picanha
        biltong. Turducken jowl meatball jerky. Pork boudin sirloin,
        fatback porchetta jerky turducken tail frankfurter.
        Salami porchetta pork chop, andouille short loin fatback
        alcatra biltong burgdoggen tri-tip picanha sausage strip steak.
        Ball tip tenderloin cupim corned beef burgdoggen short loin,
        kevin alcatra venison filet mignon strip steak ribeye beef drumstick.
      </Text>
    <Text {...rest}>
        Venison meatball meatloaf ball tip ham hock chicken.
        Meatball cupim frankfurter pastrami fatback bacon.
        Ham alcatra sausage fatback burgdoggen rump. Beef ribeye alcatra,
        tri-tip cow pancetta pig short loin kevin turducken leberkas.
        Shankle kielbasa boudin porchetta ham hock brisket.
      </Text>
    <Text {...rest}>
        Cupim porchetta shank, fatback filet mignon rump beef ribs ribeye.
        Ribeye beef tri-tip landjaeger cupim venison boudin pork belly.
        Hamburger rump pig meatball beef biltong tongue pancetta
        kevin picanha salami. Drumstick biltong pork landjaeger
        pig venison boudin fatback rump salami ball tip bacon kevin spare ribs.
        Bacon alcatra ball tip cow short loin porchetta ribeye,
        sausage filet mignon shankle kielbasa pig.
      </Text>
  </Flex>
)

storiesOf('Text', module)
  .add('<Text />', () => <RenderLongText />)
  .add('<Text lg/>', () => <RenderLongText lg />)
  .add('<Text strong/>', () => <RenderLongText strong />)
  .add('<Text strong lg/>', () => <RenderLongText strong lg />)
  .add('<Text sm />', () => <RenderLongText sm />)
