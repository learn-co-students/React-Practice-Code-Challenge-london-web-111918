import React, { Component } from 'react'

class Sushi extends Component {

  state = {
    isEaten: false
  }

  handleClick = () => {
    if(this.props.budget >= this.props.sushi.price) {
       this.setState({isEaten: true})
      this.props.addPlate(this.props.sushi.price)
    } else {
    console.log('not enough moneys')
    }
  }

  render() {
  return (
    <div className="sushi">
      <div className="plate" 
           onClick={this.handleClick}>
        { this.state.isEaten 
        ?
            null
          :
            <img src={this.props.sushi.img_url} width="100%" alt=''/>
        }
      </div>
      <h4 className="sushi-details">
        {this.props.sushi.name} - £{this.props.sushi.price}
      </h4>
    </div>
  )
      }
}

export default Sushi