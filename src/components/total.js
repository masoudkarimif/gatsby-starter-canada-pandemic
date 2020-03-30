import React from 'react'
import {numberWithCommas} from '../helpers/helper'


export default (props) => {
  const totalCases = props.data.reduce((total, item)=> total+parseInt(item.cases), 0);
  const totalDeaths = props.data.reduce((total, item)=> total+parseInt(item.deaths), 0);

  return (
    <div className="column center-text" id="total-holder">
        <div className="total-group">
          <h1 className="h-title">Total Cases</h1>
          <h1 className="h-value">{numberWithCommas(totalCases)}</h1>
        </div>
        <div className="total-group">
          <h1 className="h-title">Total Deaths</h1>
          <h1 className="h-value">{numberWithCommas(totalDeaths)}</h1>
        </div>
    </div>
  )
}
