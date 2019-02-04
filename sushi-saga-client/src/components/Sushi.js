import React, {Component} from 'react'

class Sushi extends Component {

  constructor() {
    super()
    this.state = {
      isEaten: false
    }
  }

  handleClick = (event) => {
    if (this.props.remainingFunds > this.props.sushi.price) {
      event.persist()
      const sushi = event
      this.props.handleEatenSushi(sushi)
      this.setState({
        isEaten: !this.state.isEaten
      })
    }
  }

  render() {
    return (
      <div className="sushi">
        <div className="plate"
             onClick={this.handleClick}>
          {
            this.state.isEaten?
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

export default Sushi
