import React, { Component, PropTypes } from 'react'
import Modal from '../Modal'
import Button from '../Button'
import Text from '../Text'
import Space from '../Space'
import Flex from '../Flex'

export default class Afk extends Component {
  constructor (props) {
    super(props)
    this.handleCancelAfk = this.handleCancelAfk.bind(this)
    this._startAfkTimer = this._startAfkTimer.bind(this)
    this.clearTimer = this.clearTimer.bind(this)
    this.state = {
      isAfk: false
    }
  }

  componentWillMount () {
    this.timerCreator = setInterval(() => {
      this.createTimer()
    }, 1000)
    window.addEventListener('mousemove', this.clearTimer)
    window.addEventListener('keydown', this.clearTimer)
  }

  clearTimer () {
    clearTimeout(this.timer)
    this.timer = null
  }

  handleCancelAfk () {
    clearTimeout(this.timer2)
    clearTimeout(this.timer)
    this.timer = null
    this.timer2 = null
    this.setState({ isAfk: false })
    window.addEventListener('mousemove', this.clearTimer)
    window.addEventListener('keydown', this.clearTimer)
  }

  createTimer () {
    if (this.timer || this.state.isAfk) {
      return
    } else {
      this.timer = setTimeout(this._startAfkTimer, this.props.timeout)
    }
  }

  componentWillUnmount () {
    window.removeEventListener('mousemove', this.clearTimer, { capture: false })
    window.removeEventListener('keydown', this.clearTimer, { capture: false })
    clearTimeout(this.timer)
    clearTimeout(this.timer2)
    clearInterval(this.timerCreator)
    this.timer = null
    this.timer2 = null
  }

  _startAfkTimer () {
    window.removeEventListener('mousemove', this.clearTimer, { capture: false })
    window.removeEventListener('keydown', this.clearTimer, { capture: false })
    this.setState({ isAfk: true })
    this.timer2 = setTimeout(this.props.onTimeout, 30000)
  }

  render () {
    return (
      <div className='afk-container'>
        <Modal width={300} open={this.state.isAfk} title='It Seems your away'>
          <Flex column>
            <Flex p={1} justify='center' align='center'>
              <Text>Logging you out in 30 seconds...</Text>
            </Flex>
            <Flex>
              <Space auto />
              <Button
                bgColor='success'
                onClick={this.handleCancelAfk}>
                Return to application
            </Button>
            </Flex>
          </Flex>
        </Modal>
      </div>
    )
  }
}

Afk.propTypes = {
  children: PropTypes.node,
  timeout: PropTypes.number.isRequired,
  onTimeout: PropTypes.func.isRequired
}

Afk.defaultProps = {
  timeout: 120000
}
