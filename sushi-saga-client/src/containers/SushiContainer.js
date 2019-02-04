import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from "../components/Sushi";

const SushiContainer = (props) => {
  const pagination = props.page * 4
  const shownSushis = props.sushis.slice(pagination, pagination + 4)

  return (
      <Fragment>
        <div className="belt">
          {
            shownSushis.map(singleSushi => {
              return <Sushi 
                key={singleSushi.id}
                sushi={singleSushi} 
                handlePlateClick={props.handlePlateClick} />
            })
          }
              <MoreButton incrementPage = {props.incrementPage} /> 
        </div>
      </Fragment> 
      // console.log(props)
      // <p>Hi</p> 
    ) 
}


export default SushiContainer;