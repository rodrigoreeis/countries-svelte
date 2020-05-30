const request = requestURL => {
  return new Promise((resolve, reject) => {
    const BASE_API = 'https://restcountries.eu/rest/v2'
    const endpoint = `${BASE_API}${requestURL}`
    fetch(endpoint)
      .then(response => response.json())
      .then(resolve)
      .catch(reject)
  })
}

export default request
