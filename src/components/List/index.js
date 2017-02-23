import React, { PropTypes } from 'react'
import Heading from '../Heading'
import Divider from '../Layout/Divider'
import Flex from '../Layout/Flex'
import Text from '../Text'

export const List = (props) => {
  const { children } = props
  return (
    <Flex column p={1}>
      {children}
    </Flex>
  )
}
List.displayName = 'List'

List.propTypes = {
  children: PropTypes.node.isRequired
}

export const ListHeading = ({ level, children }) => (
  <Flex column>
    <Heading level={level}>{children}</Heading>
    <Divider />
  </Flex>
)

ListHeading.propTypes = {
  level: React.PropTypes.number,
  children: React.PropTypes.node
}

export const ListItem = ({desc, value, children}) => (
  <Flex justify='space-between' align='center' p={1}>
    {desc && <Text small strong mb={0}>{desc}</Text>}
    {value && <Text small strong color='success' mb={0}>{value}</Text>}
    {children}
  </Flex>
)

ListItem.displayName = 'ListItem'

ListItem.propTypes = {
  children: PropTypes.node,
  desc: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
}
