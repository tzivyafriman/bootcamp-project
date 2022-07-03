//import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import { providersProvider } from './context/providers';
import Houzzebodcamp from './components/Houzzebootcamp';
import UsingXhr from './components/UsingXhr';

function App() {
  return (
    //why this(providersProvider) worng in console?
    // <providersProvider>
      <Routes>
        <Route exact path="/" element={<Houzzebodcamp />} />
        <Route exact path="/bootcamp-project" element={<Houzzebodcamp />} />
        <Route path="/houzzebodcamp" element={<Houzzebodcamp />} />
        <Route path="/usingxhr" element={<UsingXhr />} />
      </Routes>
    // </providersProvider>
  );
}
    
export default App;
