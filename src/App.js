import React from 'react';
import './App.css';

import { useSelector, useDispatch} from 'react-redux'
import { plus, minus} from './redux/countSlice'

export default function App() {
  const num = useSelector((state) => state.countSlice.counter)
  const dispatch = useDispatch()


  return (
    <div style={{
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: ' rgb(68, 132, 230)'
    }}>
      <div>
      <span>{num}</span>
      </div>
      <div>
      <button onClick={() => dispatch(plus())}>+</button>

      <button onClick={() => dispatch(minus())}>-</button>
      </div>
    </div>
  );
}


