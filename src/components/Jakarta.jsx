import React, { useEffect } from 'react'

export default function Jakarta() {
  useEffect(() => {
    axios.get('https://api.sunrisesunset.io/json?lat=-6.200000&lng=106.816666')
      .then((response) => {
        setSunrise(response.data.results.sunrise)
        setSunset(response.data.results.sunset)
      })
  }, [])

  return (
    <div>Jakarta</div>
  )
}
