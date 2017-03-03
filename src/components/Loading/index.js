import React from 'react'
import Flex from '../Layout/Flex'
import styled from 'styled-components'
import Base from '../Base'
import { animations } from '../../theme'

const Dot = styled(Base('div'))`
  background-color: ${props => props.theme.colors.success}
  height:12px;
  width: 12px;
  border-radius: 99px;
  margin-right: 2px;
  animation: 400ms ${animations.pulse} ease-in;
`

class Loading extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      dots: []
    }
  }

  handleLoaderDisplay () {
    const dots = this.state.dots
    if (dots.length === 3) {
      this.setState({dots: []})
    } else {
      dots.push(1)
      this.setState({ dots: dots })
    }
  }

  componentDidMount () {
    this.intervalLoader = setInterval(() => this.handleLoaderDisplay(), 500)
  }

  componentWillUnmount () {
    clearTimeout(this.intervalLoader)
  }
  render () {
    const { dots } = this.state
    const { height } = this.props
    return (
      <Flex
        column
        align='center'
        className='loading'
        justify='center'
        style={{
          width: '100%',
          height: `${height}vh`
        }}>
        <Flex align='center' justify='center' style={{height: 15}}>
          {dots.map((dot, id) => (
            <Dot key={id} />
          ))}
        </Flex>
      </Flex>
    )
  }
}

Loading.propTypes = {
  height: React.PropTypes.number.isRequired
}

Loading.defaultProps = {
  height: 70,
  xs: true
}

export default Loading
