import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import API from "./api";
function App() {
  const [hitsPerPage, setHitsPerPage] = useState(0);
  let [hits, setHits] = useState(0);

  useEffect(async () => {
    const result = await API.get(
        'https://hn.algolia.com/api/v1/search?query=redux'
    )

    setHits(result.data.hitsPerPage);
  }, []);

  
  useEffect(() => {
    testA();

  }, [hitsPerPage, hits]);

  function testA()  {
    setTimeout(() => {
      if (hitsPerPage < hits) {
        setHitsPerPage(hitsPerPage + 1);
      }
    }, calcTime());
  }

  function calcTime() {
    return 500 / hits ;
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {hitsPerPage}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
