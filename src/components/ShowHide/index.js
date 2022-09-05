// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {count1: 0, count2: 0}

  displayOnFirstName = () => {
    this.setState(prevState => {
      console.log(prevState)
      return {count1: prevState.count1 + 1}
    })
  }

  displayOnLastName = () => {
    this.setState(prevState => {
      console.log(prevState)
      return {count2: prevState.count2 + 1}
    })
  }

  render() {
    const {count1, count2} = this.state

    let nameElA
    let nameElB
    if (count1 % 2 !== 0) {
      nameElA = <p className="nameHeading">Joe</p>
    }

    if (count2 % 2 !== 0) {
      nameElB = <p className="nameHeading">Jonas</p>
    }

    return (
      <div className="bg-container">
        <div>
          <h1 className="heding">Show/Hide</h1>
          <div className="card-container">
            <div>
              <button
                className="NameBtn"
                type="button"
                onClick={this.displayOnFirstName}
              >
                Show/Hide Firstname
              </button>
              {nameElA}
            </div>
            <div>
              <button
                className="NameBtn"
                type="button"
                onClick={this.displayOnLastName}
              >
                Show/Hide Lastname
              </button>
              {nameElB}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
