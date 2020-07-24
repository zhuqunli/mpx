// web 页面尺寸发生改变的事件
export default function onResize (mixinType) {
  if (mixinType === 'page' && __mpx_mode__ === 'web') {
    return {
      activated () {
        if (this.$vnode.componentOptions && this.$vnode.componentOptions.Ctor.options.onResize) {
          const onResizeMethod = this.$vnode.componentOptions.Ctor.options.onResize
          window.onresize = function() {
            var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
            var h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
            onResizeMethod(w, h)
          }
        }
      }
    }
  }
}