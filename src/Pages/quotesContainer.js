import React from 'react';
import Quote from '../Components/quote'
import quotesArray from '../quotesArray';
import colorArray from '../brandingColors'

const initialQuote = quotesArray[Math.floor(Math.random() * quotesArray.length)];
const initialColor = colorArray[Math.floor(Math.random() * colorArray.length)];

class QuotesContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          quote: initialQuote.quote,
          author: initialQuote.author,
          color: initialColor.color
        }
        this.changeQuote = this.changeQuote.bind(this);
    }

    changeQuote(){
       const randomQuote = quotesArray[Math.floor(Math.random() * quotesArray.length)];
       
       this.setState({
         ...this.state,
         quote: randomQuote.quote,
         author: randomQuote.author,
         color: colorArray[Math.floor(Math.random() * colorArray.length)].color
       })

    }

    changeColors = () => {
      let newColor = colorArray[Math.floor(Math.random() * colorArray.length)].color;
      this.setState({
        ...this.state,
        color: newColor
      })
    }

    render() {
       return (
        <section id="quote-page" style={{background: this.state.color}}>
          <div id="quote-box">
              <Quote quote={this.state.quote} author={this.state.author} color={this.state.color}/>
              <a id="tweet-quote" href="https://www.freepnglogos.com/pics/logo-twitter-png" title="Image from freepnglogos.com"><img src="https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-bird-icon-png-logo-2.png" width="100" alt="twitter bird icon png logo" /></a>
              <button id="new-quote" onClick={this.changeQuote} style={{background: this.state.color}}>New Quote</button>
          </div>
        </section>
       )
    }

}

export default QuotesContainer;