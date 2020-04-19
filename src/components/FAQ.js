import React, { useState } from "react"

export default ({ tabIndex, question, answer }) => {
  const [open, setOpen] = useState(false)
  const [openCloseSign, updateSign] = useState("+")

  return (
    <div className="faq noselect">
      <div
        className="faq-question"
        role="button"
        tabIndex={tabIndex}
        onClick={() => {
          setOpen(!open)
          updateSign(open ? "+" : "-")
        }}
      >
        <div className="question">{question}</div>
        <div className="open-close-sign">{openCloseSign}</div>
      </div>

      {open ? (
        <div
          className="faq-answer"
          dangerouslySetInnerHTML={{ __html: answer }}
        />
      ) : null}
    </div>
  )
}
