import React, { createContext, usestate, useEffect, useState } from 'react'
import { fetchDataFromApi } from '../utils/api'

export const Context = createContext()

export const AppContext = (props) => {
  const [loading, setLoading] = useState(false)
  const [searchResults, setSearchResults] = useState(false)
  const [selectCategories, setSelectCategories] = useState('New')
  const [mobileMenu, setMobileMenu] = useState(false)

  const fetchSelectedCategoryData = (query) => {
    setLoading(true)
    fetchDataFromApi(`search?part=snippet&q=${query}`).then(({ items }) => {
      console.log(items)
      setSearchResults(items)
    })
    setLoading(false)
  }
  useEffect(() => {
    fetchSelectedCategoryData(selectCategories)
  }, [selectCategories])

  return (
    <Context.Provider
      value={{
        loading,
        setLoading,
        searchResults,
        setSearchResults,
        selectCategories,
        setSelectCategories,
        mobileMenu,
        setMobileMenu,
      }}
    >
      {props.children}
    </Context.Provider>
  )
}
