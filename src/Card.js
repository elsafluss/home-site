import React from "react"
import "./Card.css"
import "./assets/chess-icon.png"

const Card = ({ title, liveSite, ghSite, icon }) => {
    const source = './assets/' + icon
    console.log(source);

  return (
    <section className="card">
      <img src={source} alt="icon"/>
      <p>{title}</p>
      <a href={liveSite}>deployed site</a>
      <a href={ghSite}>GitHub repo</a>
    </section>
  )
}

export default Card
