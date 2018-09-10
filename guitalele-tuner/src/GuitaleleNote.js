import React, { Component } from 'react'
import a from './audio/A.mp3'
import d from './audio/D.mp3'
import g from './audio/G.mp3'
import c from './audio/C.mp3'
import e from './audio/E.mp3'
import ahigh from './audio/A-High.mp3'

const notes = [a, d, g, c, e, ahigh]

class GuitaleleNote extends Component {
  constructor(props) {
    super(props)
    this.audioElementRef = React.createRef()
    this.playSound = this.playSound.bind(this)
    switch (this.props.name) {
      case 'a':
        this.src = a
        break
      case 'd':
        this.src = d
        break
      case 'g':
        this.src = g
        break
      case 'c':
        this.src = c
        break
      case 'e':
        this.src = e
        break
      case 'ahigh':
        this.src = ahigh
        break
      default:
        this.src = a
    }
  }

  playSound() {
    document.querySelectorAll('audio').forEach((audioElement) => {
      audioElement.pause()
      audioElement.currentTime = 0
    })
    this.audioElementRef.current.play()
  }

  render() {
    return (
      <React.Fragment>
        <button type="button" name={this.props.name} onClick={this.playSound}>{this.props.name}</button>
        <audio src={this.src} ref={this.audioElementRef}></audio>
      </React.Fragment>
    )
  }
}

export default GuitaleleNote
