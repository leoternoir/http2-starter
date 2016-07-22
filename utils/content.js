const merge = require(`lodash/merge`)

const content = {
  require: function (file) {
    return require(`../content/${file}.json`)
  },
  merge: function (...files) {
    let res = {}
    for (file of files) {
      res = merge({}, res, content.require(file))
    }
    return res
  }
}

module.exports = content
