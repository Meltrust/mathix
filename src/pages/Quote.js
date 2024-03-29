import { useEffect, useState } from 'react';

const Quote = () => {
  const [quoteAPI, setQuote] = useState({});

  const fetchQuote = () => fetch('https://random-math-quote-api.herokuapp.com/')
    .then((response) => response.json())
    .then((data) => setQuote(data));

  useEffect(() => fetchQuote(), []);

  const { quote, author } = quoteAPI;

  return (
    <div className="text-white col-9">
      <p className="lead fs-2">{Object.keys(quoteAPI).length ? `${quote} - ${author}` : ''}</p>
      <button type="button" className="btn btn-warning" onClick={fetchQuote}>
        Get another one
      </button>
    </div>
  );
};

export default Quote;
