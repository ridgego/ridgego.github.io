export default class Shape {
  constructor (props) {
    this.props = props
  }

  mount (el) {
    this.el = el

    this.render()
  }

  render () {
    const {
      color,
      clippath,
      className = []
    } = this.props
    this.el.innerHTML = `<div style='background: ${color}; clip-path:${clippath}; width: 100%; height: 100%;' class='${className.join(' ')}'></div>`
  }

  update (props) {
    this.props = props
    this.render()
  }
}
