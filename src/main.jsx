import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Home from './Pages/Home'
import AboutUs from './Pages/AboutUs'
import Service from './Pages/Service'
import Solution from './Pages/Solution'
import Support from './Pages/Support'
import Movies from './Movie/Movie_API'
import Movies2 from './Movie/MovieDetails'
import QuizResults from './Pages/Quiz'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<QuizResults />} />
        {/* <Route path="/" element={<Movies/>} /> */}
        {/* <Route path="/" element={<Movies2/>} /> */}
        {/* <Route path="/" element={<Home/>} /> */}
        {/* <Route path="/about" element={<AboutUs/>} />
        <Route path="/service" element={<Service/>} />
        <Route path="/solution" element={<Solution/>} />
        <Route path="/support" element={<Support/>} /> */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
