const request = async requestURL => {
  const BASE_API = 'https://restcountries.eu/rest/v2'
  const endpoint = `${BASE_API}${requestURL}`
    try {
      const response = await fetch(endpoint)
      const data = response.json()
      return data
    } catch (err) {
      console.error('bar', err)
    }
}

export default request
