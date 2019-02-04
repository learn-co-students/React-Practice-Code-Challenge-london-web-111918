import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi';

const SushiContainer = ({ sushis, position, nextPosition, eat, budget }) => {
  return (
    <Fragment>
      <div className="belt">
        {
          sushis.map(sushi => <Sushi key={sushi.id} sushi={sushi} eat={eat} budget={budget} />).slice(position[0], position[1])
        }
        <MoreButton nextPosition={nextPosition} />
      </div>
    </Fragment>
  )
}

export default SushiContainer