import React from 'react'
import BarberBooking from '../module/b_Reserve/Calendar2'
import { useLocation } from 'react-router-dom'
const BarberPage = ({user}) => {
  const location = useLocation()
  const {data , haircut} = location.state
  return (
    <BarberBooking data={{data , haircut , user}} />
  )
}

export default BarberPage
