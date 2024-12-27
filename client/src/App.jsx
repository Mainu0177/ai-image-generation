import React from 'react'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Home from './pages/Home'
import CreatePost from './pages/CreatePost'


// import  { logo }  from './assets'


const App = () => {
  return (
    <BrowserRouter>
      <header className='w-full flex justify-between items-center bg-white px-4 sm:px-8 border-b-[#e6ebf4]'>
        <Link to="/">
          {/* <img  alt='logo' className='' /> */}
          <div className='font-bold text-3xl w-28 object-contain'>
            OpenAI
          </div>
        </Link>

        <Link to="create-post" className='font-inter font-medium text-white m-4 bg-[#6469ff] rounded-md px-4 py-2'>
          Create
        </Link>
      </header>
        <main className='px-4 sm:p-8 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]'>
            <Routes>
              <Route path="/" element = {<Home />} />
              <Route path="/create-post" element = {<CreatePost />} />
            </Routes>
          </main>
    </BrowserRouter>
  )
}

export default App

