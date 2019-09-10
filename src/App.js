import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styled from 'styled-components'
import Login from './components/Login';
import Requests from './components/Requests';
import './App.css';
import { baseURLAPI } from "./helpers/api";

function App() {
  const AppStyle = styled.div`

    // background-image: linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%);
    background-image: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
  `;

  let [hits, setHits] = useState(0);

  const getItems = async () => {
    const result = await baseURLAPI.get();
    setHits(result.data.hitsPerPage);
  }
  
  useEffect(() => {
    getItems();
  }, []);

  return (
    <Router>
      <AppStyle>
        <Route exact path="/" component={Login} />
        <Route path="/solicitacoes" component={Requests} />
      </AppStyle>
    </Router>
  );
}

export default App;
