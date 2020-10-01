import React, { Component } from "react";

import "./style.css";
import cronometro from "./assets/cronometro.png";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numero: 0,
      botao: "VAI",
    };
    this.timer = null;
    this.handleStart = this.handleStart.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }

  handleStart() {
    if (this.timer != null) {
      clearInterval(this.timer);
      this.timer = null;
      this.setState({ botao: "VAI" });
    } else {
      this.timer = setInterval(() => {
        this.setState({ numero: (this.state.numero += 0.1) });
        this.setState({ botao: "PAUSAR" });
      }, 100);
    }
  }

  handleClear() {
    if (this.timer != null) {
      clearInterval(this.timer);
      this.timer = null;
    }

    this.setState({ numero: 0 });
    this.setState({ botao: "VAI" });
  }

  render() {
    return (
      <div className="container">
        <img className="img" src={cronometro} alt="cronometro" />

        <a className="timer">{this.state.numero.toFixed(1)}</a>
        <div className="area-btn">
          <a className="botao" onClick={this.handleStart}>
            {this.state.botao}
          </a>
          <a className="botao" onClick={this.handleClear}>
            LIMPAR
          </a>
        </div>
      </div>
    );
  }
}

export default App;
