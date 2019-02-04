import React, { Fragment } from 'react'

const Sushi = (props) => {
  const clickPlate = () => {
    !props.sushi.eaten && props.handlePlateClick(props.sushi.id, props.sushi.price)
  }

  console.log('hey: ', props);
    return (
      <div className="sushi">
        <div className="plate" 
              onClick={clickPlate}>
          { 
            props.sushi.eaten 
              ? 
              null 
              : 
              (<img src={props.sushi.img_url} width="100%" />)
          }
        </div>
        <h4 className="sushi-details">
          {props.sushi.name} - ${props.sushi.price}
        </h4>
      </div>
  )
}


export default Sushi