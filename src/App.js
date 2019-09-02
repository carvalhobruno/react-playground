import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import logo from './logo.svg';
import './App.css';
import API from "./api";
function App() {
  // const [hitsPerPage, setHitsPerPage] = useState(0);
  // let [hits, setHits] = useState(0);

  // useEffect(async () => {
  //   const result = await API.get(
  //       'https://hn.algolia.com/api/v1/search?query=redux'
  //   )

  //   setHits(result.data.hitsPerPage);
  // }, []);

 

  return (
    <div className="App">
      <Form />
    </div>
  );
}

export default App;
