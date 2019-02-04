import React, { Component } from 'react'

export default class Sushi extends Component {

  constructor(props) {
    super(props)

    this.state = { eaten: false }

  }

  eatSushi = () => {
    if (this.state.eaten === true) {
      alert("That Sushi has already been eaten!")
    } else if (this.props.sushi.price > this.props.budget) {
      alert("You can't afford that Sushi!")
    } else {
      this.setState({eaten: true})
      this.props.payForSushi(this.props.sushi.price)
    }
  }

  componentDidUpdate(prevProps) {
  if (this.props.sushi !== prevProps.sushi) {
    this.setState({eaten: false})
    }
  }

  render() {
    return (
      <div className="sushi">
        <div className="plate" onClick={() => this.eatSushi()}>
          { this.state.eaten ?
              null
              :
              <img src={this.props.sushi.img_url} width="100%" />
            }
          </div>
          <h4 className="sushi-details">
            {this.props.sushi.name} - ${this.props.sushi.price}
          </h4>
        </div>
      )
  }

}
