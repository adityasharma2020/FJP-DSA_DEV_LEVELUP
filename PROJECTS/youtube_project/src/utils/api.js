import axios from 'axios'

const BASE_URL = 'https://youtube-v31.p.rapidapi.com'
const options = {
  params: {
    maxResults: '50',
  },
  headers: {
    'X-RapidAPI-Key': '2014a08ee4msh154ae5bc280f401p111c2ajsn815ce0ec0044',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },
}

export const fetchDataFromApi = async function (url) {
  try {
    const response = await axios.get(`${BASE_URL}/${url}`, options)
    return response.data
  } catch (error) {
    console.error(error)
  }
}
