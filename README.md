# Gfas React Components

[![CircleCI](https://circleci.com/gh/jjordy/gfas-react-components.svg?style=svg)](https://circleci.com/gh/jjordy/gfas-react-components)
[![codecov](https://codecov.io/gh/jjordy/gfas-react-components/branch/master/graph/badge.svg)](https://codecov.io/gh/jjordy/gfas-react-components)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

## Install

```bash
$ npm install gfas-react-components styled-components             # We love styled components
```

## Setup

You must provide your theme to the components like so.

```javascript
// in your root component

import React from 'react'
import { ThemeProvider } from 'styled-components'
import theme from './myCustomTheme.js'
// pass in your custom theme to the components
const Root = () => (

  <ThemeProvider theme={theme}>
    <MyAppOrWhatever />
  </ThemeProvider>
)



```

### Theme file

You can use this theme file as a base 
the components look for the following values to be defined
you can customize them to get a look to your liking
```javascript
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

export default theme

```


## Requirements
* node `v6 - v7`
* npm `^3.0.0`

# Contributing & Development Instructions

## Install dependencies, and check to see it works

```bash
$ npm install                   # Install project dependencies
$ npm run dev                     # Development via storybook @ localhost:9001
```
While developing, you will probably rely mostly on `npm run dev`; however, there are additional scripts at your disposal:

|`npm run <script>`|Description|
|------------------|-----------|
|`dev`| Development Mode |
|`lint`|Lint all `.js` files.|
|`build-lib`| Build Production Library.|
|`lint:fix`|Lint and fix all `.js` files. [Read more on this](http://eslint.org/docs/user-guide/command-line-interface.html#fix).|

## Project Structure
```
.
├── .storybook               # Storybook config
├── src                      # Client entry point
│   |   ├── components       # Component Source
|   |   ├── theme.js         # default theme file for development
```