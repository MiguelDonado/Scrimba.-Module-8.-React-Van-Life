import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'

function App() {
  return (
    <BrowserRouter>
    
      <nav className="nav-container">
        <Link to="/" className="nav-home-item">#VANLIFE</Link>
        <div className="nav-container-right">
          <Link to="/about" className="nav-right-item">About</Link>
          <Link to="/vans" className="nav-right-item">Vans</Link>
        </div>
      </nav>
      
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
      
      <footer className="footer-container">Ⓒ 2022 #VANLIFE</footer>
    
    </BrowserRouter>
  )
}

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);