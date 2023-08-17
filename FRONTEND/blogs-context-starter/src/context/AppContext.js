import { createContext, useState } from 'react'
import { baseUrl } from '../baseUrl'

//context creation
export const AppContext = createContext()

//context provider
export default function AppContextProvider({ children }) {
  const [loading, setLoading] = useState(false)
  const [posts, setPosts] = useState([])
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(null)

  //data filling pending
  async function fetchBlogPosts(page = 1) {
    setLoading(true)
    let url = `${baseUrl}?page=${page}`
    console.log('finalurl', url)
    try {
      const result = await fetch(url)
      const data = await result.json()

      console.log(data)
      setPage(data.page)
      setPosts(data.posts)
      setTotalPages(data.totalPages)
    } catch (error) {
      console.log('Error in fetching data')
      setPosts(1)
      setPosts([])
      setTotalPages(null)
    }
    setLoading(false)
  }

  function handlePageChange(page) {
    setPage(page)
    fetchBlogPosts(page)
  }

  //object that contain all data
  const value = {
    posts,
    setPosts,
    loading,
    setLoading,
    page,
    setPage,
    totalPages,
    setTotalPages,
    fetchBlogPosts,
    handlePageChange,
  }

  //context providing
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}
