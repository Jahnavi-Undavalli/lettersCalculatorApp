import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {
    name: '',
  }

  onChangeSearchInput = event => {
    this.setState({
      name: event.target.value,
    })
  }

  render() {
    const {name} = this.state
    return (
      <div className="bg-container">
        <div className="inner-container1">
          <h1 className="heading">Calculate the Letters you enter</h1>
          <p className="paragraph">Enter the phrase</p>
          <input
            type="text"
            placeholder="Enter the phrase"
            onChange={this.onChangeName}
          />
          <p className="button">No.of letters: {name.length()}</p>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          className="img"
          alt="letters calculator"
        />
      </div>
    )
  }
}
export default LettersCalculator
