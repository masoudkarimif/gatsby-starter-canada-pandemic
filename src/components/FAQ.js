import React from "react"

class FAQ extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
      openCloseSign: "+",
    }
  }

  clickHandler() {
    this.setState({
      open: !this.state.open,
      openCloseSign: this.state.open ? "+" : "-",
    })
  }

  render() {
    return (
      <div className="faq noselect">
        <div
          className="faq-question"
          role="button"
          tabIndex={this.props.tabIndex}
          onClick={this.clickHandler.bind(this)}
        >
          <div className="question">{this.props.question}</div>
          <div className="open-close-sign">{this.state.openCloseSign}</div>
        </div>

        {this.state.open ? (
          <div
            className="faq-answer"
            dangerouslySetInnerHTML={{ __html: this.props.answer }}
          />
        ) : null}
      </div>
    )
  }
}

export default FAQ
