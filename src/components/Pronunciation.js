import React, { Component } from "react"

export default class extends Component {
  playAudio(event) {
    event.preventDefault();
    const audioEl = document.getElementsByClassName("audio-element")[0]
    audioEl.play()
  }

  render() {
    return (
      <div>
        <button onClick={this.playAudio}>
        <i className="fa fa-volume-up"
              data-tooltip
              title="Click to hear name pronunciation"></i>
        </button>
        <audio className="audio-element">
          <source src="../assets/Aisling_McCaffrey_Name_Audio.mp3"></source>
        </audio>
      </div>
    )
  }
}