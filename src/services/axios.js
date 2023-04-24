import axios from 'axios'

export const getBaseURL = () => {
  if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    return 'http://localhost:3000/api'
  }
  return process.env.BASE_URL
}

export const axiosClient = axios.create({
  baseURL: getBaseURL(),
})

export const calendarAPI = {
  fetchEvents: async (endpoint) => {
    try {
      const response = await axiosClient.get('/events')
      return response
    } catch (error) {
      console.error(error)
    }
  },
}
