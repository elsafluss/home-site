import React from "react"
import "./Links.css"

const Links = () => {
  return (
    <div className="links-container">
      <a className="top-link" href="https://www.linkedin.com/in/elsafluss/">
        <span className="top-link-small">Find me on </span>LinkedIn
      </a>
      <a
        className="top-link"
        href="https://terminal.turing.edu/alumni/745-elsa-fluss"
      >
        <span className="top-link-small">View my Turing </span>Portfolio
      </a>
      <a className="top-link" href="mailto:elsafluss@gmail.com">
        <span className="top-link-small">Reach me by </span>Email
      </a>
    </div>
  )
}

export default Links
