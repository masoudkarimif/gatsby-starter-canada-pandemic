import React from 'react'


export default (props)=> {

  const rows = props.data.map((row, i) => <tr key={i}><td>{row.province}</td><td>{row.cases}</td><td>{row.deaths}</td></tr>)
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
