import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {props.selection.map(singleSushi => <Sushi key={singleSushi.id} sushi={singleSushi} payForSushi={props.payForSushi} budget={props.budget}/>)}
        <MoreButton getMoreSushi={props.getMoreSushi}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer
