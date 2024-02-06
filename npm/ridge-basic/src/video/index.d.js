import Video from './Video'
export default {
  name: 'video',
  component: Video,
  icon: 'bi bi-film',
  type: 'vanilla',
  title: '视频',
  order: 10,
  width: 120,
  height: 80,
  props: [{
    name: 'src',
    label: '地址',
    type: 'string'
  }, {
    name: 'autoplay',
    label: '播放',
    connect: true,
    type: 'boolean'
  }],
  events: [],
  methods: []
}
