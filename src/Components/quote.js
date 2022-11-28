import React from 'react';




class Quote extends React.Component {

  render() {
    return (
        <>
          <h1 id="text"><span className="quote-symbol" style={{color: this.props.color}}>&quot;</span>{this.props.quote}<span className="quote-symbol" style={{color: this.props.color}}>&quot;</span></h1>
          <p id="author">{'-  ' + this.props.author}</p>
        </>  
    )
  }
}

export default Quote;