import React from 'react'
import TooltipMessage from './TooltipMessage'
import styled from 'styled-components'
import Base from '../Base'
const arrowSize = 5

const ToolTipContent = ({ className, direction, message, active, bgColor, ...rest }) => {
  const tooltipClasses = `${direction} ra-tooltip ${className}`

  return (
    <div className={tooltipClasses} aria-hidden={!active}>
      <TooltipMessage message={message} arrowSize={arrowSize} {...rest}/>
    </div>
  )
}
ToolTipContent.displayName = 'ToolTipContent'

ToolTipContent.propTypes = {
  message: React.PropTypes.string.isRequired,
  direction: React.PropTypes.string.isRequired,
  active: React.PropTypes.bool.isRequired,
  bgColor: React.PropTypes.string
}

export default styled(Base(ToolTipContent)) `
    position: absolute;
    background: ${props => props.theme.colors[props.bgColor]};
    transition: all .25s;
    display: none;
    p {
      padding: .5rem 1rem;
      margin: 0;
      white-space: nowrap;
      color: ${props => props.theme.colors[props.color || 'white']};
    }
    &.top {
      top: 0;
      left: 50%;
      transform: translate(-50%,-120%);
      .ra-tooltip-message {
        &:after {
            top: 100%;
            left: 50%;
            border-top-color: ${props => props.theme.colors[props.bgColor]};
        }
      }
    }
    &.bottom {
      bottom: 0;
      left: 50%;
      transform: translate(-50%,120%);
      .ra-tooltip-message {
        &:after {
            top: -${arrowSize * 2}px;
            left: 50%;
            border-bottom-color: ${props => props.theme.colors[props.bgColor]};
        }
      }
    }
    &.left {
      top: 50%;
      left: -${arrowSize}px;
      transform: translate(-100%,-50%);
      .ra-tooltip-message {
        &:after {
            top: 50%;
            left: 100%;
            margin-left: 0;
            margin-top: -${arrowSize}px;
            border-left-color: ${props => props.theme.colors[props.bgColor]};
        }
      }
    }
    &.right {
      top: 50%;
      right: -${arrowSize}px;
      transform: translate(100%,-50%);
      .ra-tooltip-message  {
        &:after {
            top: 50%;
            right: 100%;
            margin-left: 0;
            margin-top: -${arrowSize}px;
            border-right-color: ${props => props.theme.colors[props.bgColor]};
        }
      }
    }
`
