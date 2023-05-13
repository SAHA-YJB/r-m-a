import { Component } from "../core/SAHA"

export default class NotFound extends Component {
  render() {
    this.el.classList.add('container', 'not-found')
    this.el.innerHTML = /* html */ `
      <h1>
        Sorry..<br>
        Page Not Found.<br>
        Please check the https address again!
      </h1>
    `
  }
}