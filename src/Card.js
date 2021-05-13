import React from "react"
import "./Card.css"
import "./assets/chess-icon.png"
import chessIcon from "./assets/chess-icon.png"
import baseballIcon from "./assets/baseball-icon.png"
import dragonIcon from "./assets/dragon-icon.png"

const Card = ({ title, liveSite, ghSite, icon }) => {
  return (
    <section className="card">
      {icon === "chess" ? (
        <img src={chessIcon} alt="chess icon" className="card-icon" />
      ) : icon === "baseball" ? (
        <img src={baseballIcon} alt="chess icon" className="card-icon" />
      ) : (
        icon === "dragon" && (
          <img src={dragonIcon} alt="chess icon" className="card-icon" />
        )
      )}
      <p className="title-text">{title}</p>
      <p className="visit-text">Visit:</p>
      <a href={liveSite}>
        <span className="card-text-small">Deployed </span>App
      </a>
      <a href={ghSite}>
        <span className="card-text-small">GitHub </span>Repo
      </a>
    </section>
  )
}

export default Card
