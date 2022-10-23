import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import Box from './component/Box';

function App() {
  let count = useSelector(state=>state.count)
  let id = useSelector(state=>state.id)
  let password = useSelector(state=>state.password)
  let dispatch = useDispatch()

  const increase=() => {
    dispatch({type:'INCREMENT', payload:{num:5}}) //payload:내가 원하는 정보 보낼수 있음.
  }
  const login=()=> {
    dispatch({type:'LOGIN', payload:{id:'noona', password:'123'}})
  }
  return (
    <div>
      <h1>
        {id},{password}
      </h1>
      <h1>{count}</h1>  
      <button onClick={increase}>증가!</button>
      <button onClick={login}>Login</button>
      <Box />
    </div>
  );
}

export default App;
