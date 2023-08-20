import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AppContext } from './context/contextApi'
import Header from './components/Header'
import Feed from './components/Feed'
import SearchResults from './components/SearchResult'
import VideoDetails from './components/VideoDetails'
const App = () => {
  return (
    <AppContext>
      <BrowserRouter>
        <div className='flex flex-col h-'>
          <Header />
          <Routes>
            <Route path='/' exact element={<Feed />} />
            <Route
              path='/searchResult:searchQuery'
              element={<SearchResults />}
            />
            <Route path='/video/:id' element={<VideoDetails />} />
          </Routes>
        </div>
      </BrowserRouter>
    </AppContext>
  )
}

export default App
