import React, { Component } from 'react'
import GuitaleleNote from './GuitaleleNote'
import './App.css'

const notes = ['g', 'c', 'd', 'e', 'a', 'ahigh']

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <header>
          <h1>Guitalele Tuner</h1>
        </header>
        <div className="note-buttons">
          {notes.map((note, index) => {
            return <GuitaleleNote name={note} key={index} />
          })}
        </div>
        <footer>
          <p>&copy; Copyright Square People Solutions Ltd</p>
        </footer>
      </React.Fragment>
    )
  }
}

export default App
