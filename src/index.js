import HelloWorld from '@/HelloWorld'

let install = function (Vue) {
  Vue.component(HelloWorld.name, HelloWorld)
}

export {
  install
}
