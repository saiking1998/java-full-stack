
import './App.css';
import React from 'react';
import Usememo from './components/Usememo'
import Reactmemo from './components/Reactmemo'
function App() {
  return (
    <div className="App">
              <Reactmemo />
              <Usememo />
    </div>
  );
}

export default App;
