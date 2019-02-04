import React, { Component } from 'react'

class Sushi extends Component {

  state = {
    isEaten: false
  }

  handleClick = () => {
    if (this.props.budget >= this.props.sushi.price){
      this.setState({
        isEaten: true
      })
    this.props.eat(this.props.sushi.price)
  }
}

render() {
  return (
    <div className="sushi">
      <div className="plate"
        onClick={this.handleClick}
      >
        {
          /* Tell me if this sushi has been eaten! */
          this.state.isEaten ?
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