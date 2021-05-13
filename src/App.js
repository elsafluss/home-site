import Menu from "./Menu"
import Links from "./Links"
import "./App.css"

function App() {
  return (
    <div className="App">
      <Links />
      <Menu />
      <header className="App-header">
        Elsa Fluss
        <p className="header-small">software engineer</p>
      </header>
    </div>
  )
}

export default App
