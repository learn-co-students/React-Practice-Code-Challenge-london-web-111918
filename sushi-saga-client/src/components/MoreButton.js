import React from 'react'

const MoreButton = (props) => {
  if ((props.sushiQuantity) > (props.page +1) * 4) {
    return <button onClick={props.incrementPage}>
            More sushi!
          </button>
  } else {
    return <div>😔 There are no more sushis left 😔</div>
  }

}

export default MoreButton