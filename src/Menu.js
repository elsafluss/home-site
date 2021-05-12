import React from "react"
import Card from "./Card"
import "./Menu.css"

const Menu = () => {
  return (
    <section className="menu">
      <Card
        title="ChessPedition"
        liveSite="http://chesspedition.herokuapp.com/"
        ghSite="https://github.com/ChessAdventure"
        icon="chess"
      />
      <Card
        title="Who's That Cub?"
        liveSite="http://whos-that-player.herokuapp.com/"
        ghSite="https://github.com/elsafluss/whos-that-cub"
        icon="baseball"
      />
      <Card
        title="Monstronomicon"
        liveSite="http://monstronomicon.herokuapp.com/"
        ghSite="https://github.com/DrewBradley/dnd-monstronomicon"
        icon="dragon"
      />
    </section>
  )
}

export default Menu
