import {BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import './App.css'
import Home from './Pages/Home.tsx'
import About from './Pages/About.tsx'
import Services from './Pages/Services.tsx'
import Contact from './Pages/Contact.tsx'

function App() {

  return (
    <>
    <BrowserRouter>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <div className="navbar-brand">PineCrest University</div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                  <Link className="nav-link" to="/">Home</Link>
                  <Link className="nav-link" to="/about">About</Link>
                  <Link className="nav-link" to="/services">Services</Link>
                  <Link className="nav-link" to="/contact">Contact</Link>
                </div>
              </div>
          </div>
        </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
