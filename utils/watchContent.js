const fs = require(`fs`)

const content = require(`../content/index.js`)

module.exports = (param) => {
  return new Promise((resolve, reject) => {
    fs.stat(`./content/${param}.json`, (err, stats) => {
      if (err) {
        reject(err)
      } else if (stats.isFile()) {
        resolve(param)
      }
    })
  })
}
