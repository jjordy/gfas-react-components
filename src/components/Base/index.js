import styled from 'styled-components'

const calcBorderRadius = (props, position) => {
  let br
  if (props.borderRadius) {
    br = props.borderRadius
  } else if (props.rounded && position.includes(props.rounded)) {
    br = props.theme.borderRadius
  } else if (typeof props.rounded === 'boolean' && props.rounded) {
    br = props.theme.borderRadius
  } else if (props.circle) {
    console.log(props)
    br = 999
  } else {
    br = 0
  }
  return br
}

const Base = (tagname = 'div') => styled(tagname)`
  box-sizing: border-box;
  font-family: ${props => props.theme.fontFamily ? props.theme.fontFamily : 'inherit'}
  color: ${props => props.color ? props.theme.colors[props.color] : 'inherit'}
  background-color: ${props => props.bgColor ? props.theme.colors[props.bgColor] || props.bgColor : 'transparent'}
  padding: ${props => props.p ? props.theme.padding[props.p] : props.theme.padding[0]}px
  margin: ${props => props.m ? props.theme.margin[props.m] : 0}px
  border-top-left-radius: ${props => calcBorderRadius(props, 'top-left')}px
  border-top-right-radius: ${props => calcBorderRadius(props, 'top-right')}px
  border-bottom-left-radius: ${props => calcBorderRadius(props, 'bottom-left')}px
  border-bottom-right-radius: ${props => calcBorderRadius(props, 'bottom-right')}px
  margin-bottom: ${props => props.mb ? props.theme.margin[props.mb] : 0}px
  margin-top: ${props => props.mt ? props.theme.margin[props.mt] : 0}px
`

Base.defaultProps = {
  rounded: true
}

export default Base
