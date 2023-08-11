import React, { useEffect, useState } from 'react'
import { apiUrl, filterData } from './data'
import Navbar from './components/Navbar'
import Filter from './components/Filter'
import Cards from './components/Cards'
import { toast } from 'react-toastify'
import Spinner from './components/Spinner'

const App = () => {
  const [courses, setCourses] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(apiUrl+"ds")
        const output = await res.json()

        // Save data into a variable
        setCourses(output.data)
      } catch (error) {
        toast.error('Something went wrong')
      }
      setLoading(false)
    }

    fetchData()
  }, [])

  return (
    <div>
      <Navbar />
      <Filter filterData={filterData} />

      {loading ? <Spinner /> : courses && <Cards courses={courses} />}
    </div>
  )
}

export default App
