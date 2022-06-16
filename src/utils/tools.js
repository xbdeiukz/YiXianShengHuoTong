export default {
  formatJSON(array, key) {
    return array.filter(item => {
      if (item[key]) {
        item[key] = item[key].split(',')
      }

      return item
    })
  },

  jsonToArr(str) {
    return JSON.parse(str)
  },

  strToArr(str) {
    return str.split(',')
  },

  replaceToSpace(str) {
    return str.replace(/,/g, ' ')
  },

  trimSpace(str) {
    return str.replace(/\s+/g, '')
  },

  throttle(fn, delay) {
    var timer = null,
      start = new Date().getTime()

    return function () {
      var _self = this,
        args = arguments,
        current = new Date().getTime()

      clearTimeout(timer)

      if (current - start >= delay) {
        fn.apply(_self, args)
        start = current
      } else {
        timer = setTimeout(function () {
          fn.apply(_self, args)
        }, delay)
      }
    }
  }
}
