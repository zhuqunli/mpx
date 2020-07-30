
export default function onResize (mixinType) {
  if (mixinType === 'page' && __mpx_mode__ === 'web') {
    return {
      activated () {
        if (this.onResize) {
          const onResizeMethod = this.onResize
          window.onresize = function () {
            var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
            var h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
            onResizeMethod({ size: { windowWidth: w, windowHeight: h } })
          }
        }
      }
    }
  }
}
