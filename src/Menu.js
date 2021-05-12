import React from 'react'
import Card from './Card'
import './Menu.css'

const Menu = () => {

    return (
      <section className="menu">
        <Card title="ChessPedition" />
        <Card title="Who's That Cub?" />
        <Card title="Monstronomicon" />

      </section>
    )
}

export default Menu