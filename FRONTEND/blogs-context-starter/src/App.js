import Header from './components/Header'
import Blogs from './components/Blogs'
import Pagination from './components/Pagintation'
import { useContext, useEffect } from 'react'
import { AppContext } from './context/AppContext'
export const App = () => {
  const {fetchBlogPosts} = useContext(AppContext)
  console.log(fetchBlogPosts);

  useEffect(() => {
    fetchBlogPosts();
  },[])
  return (
    <div>
      <Header />
      <Blogs />
      <Pagination />
    </div>
  )
}

export default App
