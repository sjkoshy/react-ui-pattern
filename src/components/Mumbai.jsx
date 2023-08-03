import React, { useEffect } from 'react'

export default function Mumbai() {
  useEffect(() => {
    axios.get('https://api.sunrisesunset.io/json?lat=19.076090&lng=72.877426')
      .then((response) => {
        setSunrise(response.data.results.sunrise)
        setSunset(response.data.results.sunset)
      })
  }, [])

  return (
    <div>Mumbai</div>
  )
}
