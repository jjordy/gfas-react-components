import { keyframes } from 'styled-components'

const theme = {
  sizes: [16, 18, 24, 32, 36, 48],
  padding: [0, 6, 12, 24, 32, 64],
  margin: [0, 8, 16, 24, 32, 64],
  borderWidth: 1,
  borderRadius: 4,
  colors: {
    default: '#222',
    white: '#FFF',
    black: '#222',
    transparent: 'transparent',
    gray: '#e7e7e7',
    lightgray: '#f8f8f8',
    primary: '#0193F5',
    secondary: '#E921FF',
    info: '#11FFEA',
    success: '#40E59B',
    warning: '#FFC32F',
    error: '#E84548'
  },
  fontFamily: 'Open Sans, Helvetica, Arial, sans-serif'
}

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100%{
    transform: rotate(90deg);
  }
`

const shake = keyframes`
  10%, 90% {
    transform: translate3d(-1px, 0, 0);
  }
  
  20%, 80% {
    transform: translate3d(2px, 0, 0);
  }

  30%, 50%, 70% {
    transform: translate3d(-3px, 0, 0);
  }

  40%, 60% {
    transform: translate3d(3px, 0, 0);
  }
`

const pulse = keyframes`
  0% {
    -moz-box-shadow: 0 0 0 0 rgba(204,169,44, 0.4);
    box-shadow: 0 0 0 0 rgba(204,169,44, 0.4);
  }
  70% {
      -moz-box-shadow: 0 0 0 10px rgba(204,169,44, 0);
      box-shadow: 0 0 0 10px rgba(204,169,44, 0);
  }
  100% {
      -moz-box-shadow: 0 0 0 0 rgba(204,169,44, 0);
      box-shadow: 0 0 0 0 rgba(204,169,44, 0);
  }
`

export const animations = {
  fadeIn,
  shake,
  rotate,
  pulse
}

export default theme
