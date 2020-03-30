import React from "react"
import FAQ from "./FAQ"


export default (props) => {
  console.log(props.data)
  const faqs = props.data.map((item, index)=> <FAQ key={index} question={item.question} answer={item.answer} />)
  return (
    <>
      <h2>FAQs</h2>
      {faqs}
    </>
  )
}
