//reactjs application for counting Mangoes
-------------------------------------------
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
