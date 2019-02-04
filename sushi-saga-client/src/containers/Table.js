import React, { Fragment } from 'react'

const Table = (props) => {

  // Show an image for each plate that has been eaten
  const renderPlates = (array) => {
    return array.map((x, index) => {
      return <div className="empty-plate" style={{ top: -7 * index }}/>
    })
  }
  console.log(props)

  return (
    <Fragment>
      <h1 className="remaining">
        You have: ${props.customerMoney - props.spentMoney} remaining!
      </h1>
      <div className="table">
        <div className="stack">
          {
            (props.eatenSushi.length > 0) ?
            renderPlates(props.eatenSushi)
            : null

          }
        </div>
      </div>
    </Fragment>
  )
}

export default Table
