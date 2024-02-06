import './style.css'

/**
 * @abstract BaseContainer
 * 容器基础实现，包含通用配置及方法
 */
export default class BaseContainer {
  constructor (props) {
    this.props = props
    // 更新时同时强制更新子节点
    this.forceUpdateChildren = true
  }

  /**
   * 基础挂载后子组件初始化动作
   */
  mounted () {}

  // 属性更新后触发
  updated () { }

  // 子节点移除后触发
  onChildRemoved () {}

  // 子节点添加后触发
  onChildAppended () {}

  // 更新子节点列表
  childListUpdated () {}

  // 获取容器样式
  getContainerStyle () {}

  // 子节点style信息
  getChildStyle (view) {}

  /**
   * 组件挂载到给定Element
   */
  async mount (el) {
    this.el = el
    this.containerEl = document.createElement('div')

    for (const className of this.props.classNames ?? []) {
      this.containerEl.classList.add(className)
    }

    el.appendChild(this.containerEl)

    // 编辑器之下，属性有__isEdit
    this.isRuntime = !this.props.__isEdit
    Object.assign(this.containerEl.style, {
      width: '100%',
      height: '100%'
    }, this.getContainerStyle())
    this.children = this.props.children
    if (this.children) {
      for (const childNode of this.children) {
        try {
          const div = document.createElement('div')
          this.containerEl.appendChild(div)
          this.updateChildStyle(childNode, div)
          await childNode.mount(div)
        } catch (e) {
          // 忽略渲染错误
        }
      }
    }
    await this.mounted()
  }

  unmountChildren () {
    for (const child of this.children) {
      child.unmount()
    }
  }

  checkNodeOrder (rect) {
    return -1
  }

  /**
   * 增加子节点
   */
  appendChild (childNode, { x, y }, index) {
    this.onDragOut()
    const el = childNode.el
    if (index > -1 && this.containerEl.childNodes[index]) {
      this.containerEl.insertBefore(el, this.containerEl.childNodes[index])
    } else {
      this.containerEl.appendChild(el)
    }
    this.onChildAppended(childNode, { x, y })
    this.updateChildStyle(childNode)
  }

  /**
   * 更新子节点次序
   **/
  updateChildList (childList) {
    for (const childNode of childList) {
      this.containerEl.appendChild(childNode.el)
      this.updateChildStyle(childNode)
    }
    this.children = childList
    this.childListUpdated()
  }

  isEditMode () {
    return this.view != null
  }

  isDroppable () {
    return true
  }

  // 拖拽上浮
  onDragOver () {
    const existedNode = this.el.querySelector(':scope > .drop-shadow')

    if (existedNode == null) {
      const shadowNode = document.createElement('div')
      shadowNode.classList.add('drop-shadow')
      shadowNode.innerHTML = '可以放入容器内'

      this.el.appendChild(shadowNode)

      if (!this.el.style.position) {
        this.el.style.position = 'relative'
      }
    }
  }

  // 拖拽离开
  onDragOut () {
    if (this.el.querySelector(':scope > .drop-shadow')) {
      this.el.removeChild(this.el.querySelector(':scope > .drop-shadow'))
    }
    if (this.el.style.position === 'relative') {
      this.el.style.position = ''
    }
  }

  // 删除子节点
  removeChild (node) {
    if (node.el.parentElement === this.containerEl) {
      this.containerEl.removeChild(node.el)
    }
    this.onChildRemoved(node)
  }

  /**
   * 计算并更新子节点样式
   * @param  {ElementWrapper} wrapper 封装类
   */
  updateChildStyle (childNode, div) {
    const el = div || childNode.el
    if (el) {
      const style = Object.assign({}, this.getChildStyle(childNode))
      Object.assign(el.style, style)
    }
  }

  getChildren () {
    return this.children
  }

  getChildElements () {
    return Array.from(this.containerEl.childNodes).filter(el => el.ridgeNode)
  }

  /**
   * 按属性联动方法
   * @param {*} props
   */
  update (props) {
    Object.assign(this.props, props)

    // 更新容器本身样式
    Object.assign(this.containerEl.style, this.getContainerStyle())

    this.containerEl.className = (this.props.classNames || []).join(' ')

    // 联动更新所有子节点
    if (this.forceUpdateChildren) {
      for (const childNode of this.children) {
        childNode.forceUpdate()
      }
    }
    this.updated()
  }

  getResetStyle () {
    return {
      position: '',
      top: '',
      left: '',
      transform: '',
      width: '',
      height: ''
    }
  }
}
