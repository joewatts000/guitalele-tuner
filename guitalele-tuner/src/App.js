import React, { Component } from 'react'
import GuitaleleNote from './GuitaleleNote'
import logo from './logo.svg'
import './App.css'

const notes = ['a', 'd', 'g', 'c', 'e', 'ahigh']

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>Guitalele Tuner</h1>
        <div className="note-buttons">
          {notes.map((note, index) => {
            return <GuitaleleNote name={note} key={index} />
          })}
        </div>
        <p>Thats it!</p>
      </React.Fragment>
    )
  }
}

export default App
