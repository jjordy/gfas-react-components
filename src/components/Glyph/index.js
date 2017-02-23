import React, { PropTypes } from 'react'
import classNames from 'classnames'
import styled from 'styled-components'
import Base from '../Base'

const Glyph = ({xxl, xl, lg, md, sm, right, fixed, spin, icon, css, ...rest}) => {
  const iconClasses = classNames('fa', {
    'fa-5x': xxl,
    'fa-4x': xl,
    'fa-3x': lg,
    'fa-2x': md,
    'fa-lg': sm,
    'pull-xs-right': right,
    'fa-fw': fixed,
    'fa-spin': spin
  })

  const getStyles = () => {
    return `${iconClasses} ${css} fa-${icon}`
  }

  const Component = styled(Base('i'))`
    font-family: FontAwesome;
  `
  return <Component className={getStyles()} {...rest}/>
}

Glyph.propTypes = {
  xxl: PropTypes.bool,
  xl: PropTypes.bool,
  lg: PropTypes.bool,
  md: PropTypes.bool,
  sm: PropTypes.bool,
  icon: PropTypes.string.isRequired,
  css: PropTypes.string,
  fixed: PropTypes.bool,
  right: PropTypes.bool,
  spin: PropTypes.bool,
  center: PropTypes.bool,
  color: PropTypes.string,
  style: PropTypes.object,
  theme: PropTypes.string
}

Glyph.defaultProps = {
  xxl: false,
  xl: false,
  lg: false,
  md: false,
  sm: false,
  fixed: false,
  right: false,
  icon: 'fa-question',
  css: '',
  spin: false,
  center: false,
  style: {}
}

export default Glyph
