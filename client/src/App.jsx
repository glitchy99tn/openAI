import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home, CreatePost } from './pages'
import { Navbar } from './components'


const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <main className=' pt-12 pb-12 px-4 lg:px-8'>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/create-post" element={<CreatePost/>}/>
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App