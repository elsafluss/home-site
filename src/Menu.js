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
        icon="chess-icon"
      />
      <Card
        title="Who's That Cub?"
        liveSite="http://whos-that-player.herokuapp.com/"
        ghSite="https://github.com/elsafluss/whos-that-cub"
        icon="baseball-icon"
      />
      <Card
        title="Monstronomicon"
        liveSite="http://monstronomicon.herokuapp.com/"
        ghSite="https://github.com/DrewBradley/dnd-monstronomicon"
        icon="dragon-icon"
      />
    </section>
  )
}

export default Menu
