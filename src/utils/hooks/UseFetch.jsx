import { useState, useEffect } from 'react'

/**
* Allows to connect to backend API
*
* @param url string of the endpoint to connect to

*
* @return boolean for the loading statut
* @return object with data
* @return string with error
* @author JP
* @version 1.0
*/

export function useFetch(url) {
  const [data, setData] = useState({})
  const [isLoading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    if (!url) return
    setLoading(true)
    async function fetchData() {
      try {
        const response = await fetch(url)
        const data = await response.json()
        setLoading(true)
        setData(data)
      } catch (err) {
        console.log(err)
        setError(true)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [url])

  return { isLoading, data, error }
}
