import React from "react"

const Item = props => {
  return (
    <table className="item-table">
      <tbody>
        <tr>
          <td className="item-name">{props.name || ""}</td>
          <td className="item-when">{props.when || ""}</td>
        </tr>
        <tr>
          <td className="item-org">{props.org || ""}</td>
          <td className="item-where">{props.where || ""}</td>
        </tr>
        <tr>
          <td
            className="item-more-info"
            colSpan={2}
            dangerouslySetInnerHTML={{ __html: props.moreInfo }}
          />
        </tr>
      </tbody>
    </table>
  )
}

export default Item
