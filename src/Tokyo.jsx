import React, { useEffect } from 'react'

export default function Tokyo() {
  useEffect(() => {
    axios.get('https://api.sunrisesunset.io/json?lat=35.6762&lng=139.6503')
      .then((response) => {
        setSunrise(response.data.results.sunrise)
        setSunset(response.data.results.sunset)
      })
  }, [])

  return (
    <div>Tokyo</div>
  )
}
