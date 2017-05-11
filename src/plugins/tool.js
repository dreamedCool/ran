export default {
  prefix (el, cla) {
    let pre = ['', '-webkit-', '-moz-', '-ms-', '-o-']
    for (let i = 0, t = pre.length; i < t; i++) {
      let vender = pre[i] + cla
      if (vender in el.style) {
        return vender
      }
    }
  }
}
