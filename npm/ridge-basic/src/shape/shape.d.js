import Shape from './Shape.js'

export default {
  name: 'image',
  component: Shape,
  icon: 'bi bi-circle-square',
  title: '形状',
  type: 'vanilla',
  order: 3,
  width: 160,
  height: 160,
  props: [{
    name: 'color',
    type: 'color',
    label: '颜色',
    connect: true,
    value: '#BBB'
  }, {
    name: 'clippath',
    type: 'string',
    label: '裁剪',
    connect: true
  }, {
    name: 'className',
    label: '样式',
    type: 'style',
    value: []
  }]
}
