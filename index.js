import {Component} from 'react'

import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  incCount = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state

    return (
      <div className="c1">
        <h1 className="h1">
          The Button has been clicked <span className="spn">{count}</span> times
        </h1>
        <p className="p1">Click the button to increase the count</p>
        <button type="button" onClick={this.incCount} className="b1">
          Click Me!
        </button>
      </div>
    )
  }
}
export default ClickCounter
************************************
reactjs application for counting Mangoes
-------------------------------------------
// Write your code here
import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {mango: 0, banana: 0}

  mango = () => {
    this.setState(prevState => ({mango: prevState.mango + 1}))
  }

  banana = () => {
    this.setState(prevState => ({banana: prevState.banana + 1}))
  }

  render() {
    const {mango, banana} = this.state
    return (
      <div className="c1">
        <div className="c2">
          <h1>
            Bob ate <span className="spn">{mango}</span> mangoes{' '}
            <span className="spn">{banana}</span> bananas
          </h1>
          <div className="c3">
            <div>
              <div>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                  alt="mango"
                  className="img"
                />
              </div>
              <button type="button" className="btn b1" onClick={this.mango}>
                Eat Mango
              </button>
            </div>
            <div>
              <div>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                  alt="banana"
                  className="img"
                />
              </div>
              <button type="button" className="btn b1" onClick={this.banana}>
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default FruitsCounter
