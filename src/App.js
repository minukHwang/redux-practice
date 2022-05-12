import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Button } from 'react-bootstrap';

function App() {
  const count = useSelector(state=>state.count)
  const dispatch = useDispatch()
  const numberUP = () => {
    dispatch({type:"INCREMENT", payload:{num:5}})
  }
  const numberDown = () => {
    dispatch({type:"DECREMENT"})
  }
  return (
    <Container className="App">
      <div>{count}</div>
      <Button variant="primary" onClick={numberUP}>Plus</Button>
      <Button variant='primary' onClick={numberDown}>Minus</Button>
    </Container>
  );
}

export default App;
