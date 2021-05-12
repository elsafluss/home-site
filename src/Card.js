import React from "react"
import './Card.css'

const Card = ({ title }) => {
  return (
    <section className='card'>
      {title}
    </section>
  )
}

export default Card
