import React from "react"
import FAQ from "./FAQ"


export default (props) => {
  const faqs = props.data.map((item, index)=> <FAQ key={index} tabIndex={index} question={item.question} answer={item.answer} />)
  return (
    <div id="faqs">
      <h4 id="faq-title">Frequently Askes Questions</h4>
      {faqs}
    </div>
  )
}
