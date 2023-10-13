class ChildRouting {
  name = ''
  path = ''
  element = <div></div>
  showSideBar = true
  constructor({
    name = '',
    path = '',
    element = <div></div>,
    showSideBar = true
  }) {
    this.name = name
    this.path = path
    this.element = element
    this.showSideBar = showSideBar
  }
}

export {
  ChildRouting
}