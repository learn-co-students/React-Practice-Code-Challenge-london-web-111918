import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  // Show only four sushi at a time
  let startSushi = ((props.page - 1) * 4) + 1
  let endSushi = startSushi + 3
  const filteredSushi = props.sushi.filter(sushiItem => (startSushi <= sushiItem.id && endSushi >= sushiItem.id))
  //---
  
  return (
    <Fragment>
      <div className="belt">
        {
          filteredSushi.map(sushi => <Sushi sushi={sushi} key={sushi.id} handleEatenSushi={props.handleEatenSushi} remainingFunds={props.remainingFunds}/> )
        }
        <MoreButton moreSushi={props.moreSushi} />
      </div>
    </Fragment>
  )

}

export default SushiContainer
