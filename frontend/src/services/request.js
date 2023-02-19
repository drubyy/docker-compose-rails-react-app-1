import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3001/api'

async function request(method, url, params = {}, options) {
  const requestBody = {
    method,
    url: url,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    ...options,
  }
  if (['POST', 'PUT', 'PATCH'].includes(method)) {
    requestBody.data = params
  } else {
    requestBody.params = params
  }

  try {
    const response = await axios(requestBody)
    return response
  } catch (error) {
    return error.response
  }
}
export default request