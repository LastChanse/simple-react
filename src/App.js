import './App.css';
import logo from './logo.svg';
import React from 'react';

function usePrevious(value) {
  const ref = React.useRef();

  React.useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}

function App() {
  const [val, setVal] = React.useState("");
  const prevVal = usePrevious(val);
  const ref = React.useRef();

  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <h1>Новое-старое</h1>
      <p>Стало: {val}<br/>
      Было: {prevVal}</p>
      <input ref={ref} placeholder='Введите новое значение' required/>
      <button onClick={() => setVal(ref.current.value)}>Сохранить</button>
    </div>
  );
}

export default App;
