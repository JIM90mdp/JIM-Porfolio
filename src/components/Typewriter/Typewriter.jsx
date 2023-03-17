import React, { Component } from "react";
import "./Typewriter.css";

export default class Typewriter extends Component {
  render() {
    return (
      <div class="typewriter">
        <div class="slide">
          <i></i>
        </div>
        <div class="paper"></div>
        <div class="keyboard"></div>
      </div>
    );
  }
}
