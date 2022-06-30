import logo from './logo.svg';
import './App.css';
// import { Routes, Route, Link } from "react-router-dom";
import Houzzebodcamp from './components/Houzzebootcamp';

function App() {
  return (
    <>
    {/* <Routes>
      <Route exact path="/" element={<Houzzebodcamp />} />
    </Routes> */}

    <div className="App">
        <h1>hello ! we deploy react-project, and you can see it online!</h1>
        <h2>you see all the change I do and push git!!!</h2>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div></>
  );
}

export default App;
