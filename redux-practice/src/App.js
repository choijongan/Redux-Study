import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import Box from './component/Box';

function App() {
  const count = useSelector(state=>state.count)
  const dispatch = useDispatch()

  const increase=() => {
    dispatch({type:'INCREMENT', payload:{num:5}}) //payload:내가 원하는 정보 보낼수 있음.
    
  }
  return (
    <div>
      <h1>{count}</h1>  
      <button onClick={increase}>증가!</button>
      <Box />
    </div>
  );
}

export default App;
