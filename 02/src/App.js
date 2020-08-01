import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const name = '리액트';
  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: '50px',
  };
  return (
    <>
      <div className="react">{name}</div>
      <input></input> {/*태그를 꼭 닫기*/}
      <input /> {/* 셀프태그닫기 */}
      {/* 주석은 이렇게 */}
    </>
  );
}

export default App;
