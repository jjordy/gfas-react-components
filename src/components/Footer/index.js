import React from 'react'
import Fixed from '../Fixed'
import Toolbar from '../Toolbar'

const Footer = ({ children, ...rest }) => (
  <Fixed bottom left right>
    <Toolbar {...rest}>
      {children}
    </Toolbar>
  </Fixed>
)

Footer.propTypes = {
  children: React.PropTypes.node.isRequired
}

export default Footer
