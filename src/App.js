import React from 'react';
import './App.css';
import Content from './components/Content';
import Header from './components/Header';
import InfoPessoa from './components/InfoPessoa';

function App() {
  return (
    <div className="App">
      <Header />
      <InfoPessoa />
      <Content />
    </div>
  );
}

export default App;
