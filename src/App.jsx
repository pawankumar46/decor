import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Gallery from './pages/Gallery'
import DetailedGallery from './pages/DetailedGallery'
import ListOfItems from './components/ListOfItems'
import DecorDetails from './components/DecorDetails'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <NavBar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<ListOfItems />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/gallery/:eventType" element={<DetailedGallery />} />
            <Route path="/items" element={<ListOfItems />} />
            <Route path="/decordetails" element={<DecorDetails/>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
