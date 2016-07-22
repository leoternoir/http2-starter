const fs = require(`fs`)
const path = require(`path`)
const merge = require(`lodash/merge`)

const parse = {
  use: function (pathName) {
    let result = {}
    return new Promise((resolve, reject) => {
      parse.readDir(pathName)
        .then((list) => {
          list.forEach((element, index, array) => {
            parse.isFile(`${pathName}/${element}`)
              .then(parse.readFile)
              .then((file) => {
                result = merge({}, result, file)
                if (Object.keys(result).length === Object.keys(list).length) resolve(result)
              })
              .catch((err) => {
                throw err
              })
          })
        })
    })
  },
  readDir: function (pathName) {
    return new Promise((resolve, reject) => {
      fs.readdir(pathName, (err, files) => {
        if (files) {
          resolve(files)
        } else if (err) reject(err)
      })
    })
  },
  isFile: function (pathName) {
    return new Promise((resolve, reject) => {
      fs.lstat(pathName, (err, stats) => {
        if (stats.isFile()) {
          // Result is a file
          resolve(pathName)
        } else if (!stats.isFile()) {
          // Result is a not file
          reject(pathName)
        } else if (err) reject(err)
      })
    })
  },
  readFile: function (pathName) {
    return new Promise((resolve, reject) => {
      fs.readFile(pathName, 'utf8', (err, content) => {
        if (content) {
          let file = {}
          file[path.parse(pathName).name] = content
          resolve(file)
        } else if (err) reject(err)
      })
    })
  }
}

module.exports = parse
