import React, { Fragment } from 'react'
import Sushi from '../components/Sushi'
import MoreButton from '../components/MoreButton'

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {
          /* 
             Render Sushi components here!
          */
         props.sushis.map (sushi => 
           <Sushi key={sushi.id} sushi={sushi} handleEatSushi={props.handleEatSushi} />)
        }
        <MoreButton sushiQuantity={props.sushiQuantity} incrementPage={props.incrementPage} page={props.page}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer