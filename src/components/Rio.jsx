import React, { useEffect } from 'react'

export default function Rio() {
  useEffect(() => {
    axios.get('https://api.sunrisesunset.io/json?lat=-22.9068&lng=-43.1729')
      .then((response) => {
        setSunrise(response.data.results.sunrise)
        setSunset(response.data.results.sunset)
      })
  }, [])

  return (
    <div>Rio de Janeiro</div>
  )
}
