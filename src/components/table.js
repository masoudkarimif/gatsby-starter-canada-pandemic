import React from 'react'
import {numberWithCommas} from "../helpers/helper"


export default (props)=> {

  const rows = props.data.map((row, i) => <tr key={i}><td>{row.province}</td><td>{numberWithCommas(row.cases)}</td><td>{numberWithCommas(row.deaths)}</td></tr>)
  return (
    <div className="column" id="table-holder">
      <table>
        <thead>
          <tr>
            <th>Province</th>
            <th>Cases</th>
            <th>Deaths</th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    </div>
  )
}
