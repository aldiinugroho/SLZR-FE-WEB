import { ChildRouting } from "./modelChildRouting"

class ParentRouting {
  active = false
  name = ''
  path = ''
  element = <div></div>
  childs = []
  showSideBar = true
  constructor({
    active = false,
    name = '',
    path = '',
    element = <div></div>,
    childs = [],
    showSideBar = true
  }) {
    this.active = active
    this.name = name
    this.path = path
    this.element = element
    this.childs = childs.map((i) => new ChildRouting({
      name: i?.name,
      path: `${path}${i?.path}`,
      element: i?.element,
      showSideBar: i?.showSideBar
    }))
    this.showSideBar = showSideBar
  }
}

export {
  ParentRouting
}