import React from "react"

export default (props) => {
  return(
    <div className="center-text">
      <p id="updated"><span>Updated:</span> {props.date}</p>
    </div>
  )
}
