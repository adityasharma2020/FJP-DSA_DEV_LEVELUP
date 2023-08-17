import './App.css'
import { useContext, useEffect } from 'react'
import { AppContext } from './context/AppContext'
import Home from './Pages/Home'
import TagPage from './Pages/TagPage'
import CategoryPage from './Pages/CategoryPage'
import BlogPage from './Pages/BlogPage'
import { Routes, Route, useSearchParams, useLocation } from 'react-router-dom'
const [searchParms, setSearchParams] = useSearchParams()

export default function App() {
  const fetchBlogPosts = useContext(AppContext)
  const page = useEffect(() => {
    const page = searchParms.get('page') ?? 1

    if (location.pathname.includes('tags')) {
      const tag = location.pathname.split('/').at(-1).replaceAll('-', ' ')
      fetchBlogPosts(Number(page), tag)
    } else if (location.pathname.includes('categories')) {
      const category = location.pathname.split('/').at(-1).replaceAll('-', ' ')
    }

    fetchBlogPosts()
  }, [location.pathname, location.search])

  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/blog:blogId' element={<BlogPage />}></Route>
      <Route path='/tags/:tag' element={<TagPage />}></Route>
      <Route path='/categories/:category' element={<CategoryPage />}></Route>
    </Routes>
  )
}
