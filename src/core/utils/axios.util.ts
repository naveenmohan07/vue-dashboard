import axios from 'axios'

const apiClient = axios.create({
  baseURL: process.env.API_BASE_URL,
  timeout: 10000,
  headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
})

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      console.error('Unauthorized access')
    }
    return Promise.reject(error)
  },
)

export default apiClient
