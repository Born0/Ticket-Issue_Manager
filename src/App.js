import './App.css';
import React from 'react';
import Home from './components/Home/Home';

function App() {
  return (
    // <div className="App">
    //   <Home />
    // </div>

    <div className="App">
      <header>
        {/* Header content */}
      </header>
      <main className="App-main">
        <Home />
      </main>
      <footer className="App-footer">
        <p>@{new Date().getFullYear()} GroupM</p>
      </footer>
    </div>
  );
}

export default App;
