import logo from './logo.svg';
import './App.css';
import Front from './components/Front.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
       <BrowserRouter> 
         <Front/>
       </BrowserRouter>
   
    </div>
  );
}

export default App;
