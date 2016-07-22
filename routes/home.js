const content = require(`../utils/content.js`)

module.exports = (req, res) => {
  let data = content.merge(`default`, `home`)
  res.render(`home`, data)
}
