import { useEffect, useState } from 'react';
import axios from 'axios';
import "./Quote.css";

const Quote = () => {

  const [quote, setQuote] = useState([]);

  const fetchNewQuote = async () => {
    const url = 'https://type.fit/api/quotes';

    const res = await axios.get(url);
    const data = res.data;
    let index = Math.floor(Math.random() * 17);
    setQuote(data[index]);
  }

  useEffect(() => {
    fetchNewQuote();
  }, [])

  console.log(quote)
  return (
    <div id='quote-box'>
      <div className='quote'>
        <p id='text'>{quote.text}</p>
        <p id='author'> - {quote.author}</p>
      </div>
      <div className='buttons'>
        <button id='new-quote' onClick={() => fetchNewQuote()}>New Quote</button>
        <a href='https://twitter.com/intent/tweet' id='tweet-quote' target='_blank' rel="noreferrer">
          Tweet <img src='/twitter.png' alt='tweet' />
        </a>
      </div>
    </div>
  )
}

export default Quote
