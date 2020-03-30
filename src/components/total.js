import React from 'react'


export default (props) => {
  const totalCases = props.data.reduce((total, item)=> total+parseInt(item.cases), 0);
  const totalDeaths = props.data.reduce((total, item)=> total+parseInt(item.deaths), 0);

  return (
    <div className="column center-text" id="total-holder">
        <h1 className="h-title">Total Cases</h1>
        <h1 className="h-value">{totalCases}</h1>
        <h1 className="h-title">Total Deaths</h1>
        <h1 className="h-value">{totalDeaths}</h1>
    </div>
  )
}
