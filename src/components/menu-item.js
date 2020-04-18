import React from "react"
import { Link } from "gatsby"

const MenuItem = props => {
  return (
    <Link to={props.to} className={"page-link" + props.className}>
      {props.name}
    </Link>
  )
}

export default MenuItem
