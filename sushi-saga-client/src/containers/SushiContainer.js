import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = ({sushis, sushiPosition, nextPosition, eat, budget}) => {
  return (
    <Fragment>
      <div className="belt">
        {
          sushis.map(sushi => <Sushi key={sushi.id} budget={budget} sushi={sushi} eat={eat}/>).slice(sushiPosition[0], sushiPosition[1])
        }
        <MoreButton nextPosition={nextPosition}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer