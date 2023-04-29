// Write your code here
import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {initialTime: 0}

  componentWillUnmount() {
    clearInterval(this.timerId)
  }

  onReset = () => {
    clearInterval(this.timerId)
    this.setState({initialTime: 0})
  }

  onStart = () => {
    this.timerId = setInterval(this.startClock, 1000)
  }

  startClock = () => {
    this.setState(prevState => ({initialTime: prevState.initialTime + 1}))
  }

  onStop = () => {
    clearInterval(this.timerId)
  }

  renderMinutes = () => {
    const {initialTime} = this.state
    const minutes = Math.floor(initialTime / 60)

    if (minutes < 10) {
      return `0${minutes}`
    }
    return minutes
  }

  renderSeconds = () => {
    const {initialTime} = this.state
    const seconds = Math.floor(initialTime % 60)
    if (seconds < 10) {
      return `0${seconds}`
    }
    return seconds
  }

  render() {
    const time = `${this.renderMinutes()}:${this.renderSeconds()}`

    return (
      <div className="bg-container">
        <h1 className="heading">StopWatch</h1>
        <div className="clock-container">
          <div className="img-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
              className="clock-img"
            />
            <p className="desc">Timer</p>
          </div>
          <h1 className="timer">{time}</h1>
          <div>
            <button type="button" className="start-btn" onClick={this.onStart}>
              Start
            </button>
            <button type="button" className="stop-btn" onClick={this.onStop}>
              Stop
            </button>
            <button type="button" className="reset-btn" onClick={this.onReset}>
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
